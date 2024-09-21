import applicationResponse from '../../../application/application-response';

interface ApiResponse {
  data: object;
}

class ApiResponseParser {
  toJson(applicationResponse: applicationResponse): ApiResponse {
    return {
      data: applicationResponse.toJson(),
    };
  }
}

export { ApiResponseParser, ApiResponse };
