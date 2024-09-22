import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import ApplicationError from '../../../../domain/exception/application-error';
import { Response } from 'express';
import ResourceNotFoundError from '../../../../domain/exception/resource-not-found-error';
import { ErrorResponseParser } from '../api-response';

@Catch()
class ExceptionHandler implements ExceptionFilter {
  constructor(private readonly responseParser: ErrorResponseParser) {
    this.responseParser = responseParser;
  }
  catch(exception: Error, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (exception instanceof ApplicationError) {
      const data = {
        message: exception.message,
        error: exception.name,
        statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      };

      response.status(HttpStatus.UNPROCESSABLE_ENTITY).json(data);
      return;
    } else if (exception instanceof ResourceNotFoundError) {
      const data = {
        message: 'Resource not found',
        error: 'Resource not found',
        statusCode: HttpStatus.NOT_FOUND,
      };
      response
        .status(HttpStatus.NOT_FOUND)
        .json(this.responseParser.toJson(data));
      return;
    } else if (exception instanceof NotFoundException) {
      const data = {
        message: 'Endpoint not found',
        error: 'Endpoint not found',
        statusCode: HttpStatus,
      };
      response
        .status(HttpStatus.NOT_FOUND)
        .json(this.responseParser.toJson(data));
      return;
    } else if (exception instanceof BadRequestException) {
      const data = {
        message: exception.getResponse()['message'],
        error: 'Bad request',
        statusCode: HttpStatus.BAD_REQUEST,
      };
      response
        .status(HttpStatus.BAD_REQUEST)
        .json(this.responseParser.toJson(data));
      return;
    }

    const data = {
      message: 'Internal server error',
      error: 'Internal server error',
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
    };

    response
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json(this.responseParser.toJson(data));
  }
}

export default ExceptionHandler;
