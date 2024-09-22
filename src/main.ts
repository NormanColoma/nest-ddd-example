import { NestFactory } from '@nestjs/core';
import { Container } from './container';
import ExceptionHandler from './shared/infrastructure/rest/http/handlers/exception-handler';
import { ErrorResponseParser } from './shared/infrastructure/rest/http/api-response';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(Container);
  app.useGlobalFilters(new ExceptionHandler(new ErrorResponseParser()));
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
