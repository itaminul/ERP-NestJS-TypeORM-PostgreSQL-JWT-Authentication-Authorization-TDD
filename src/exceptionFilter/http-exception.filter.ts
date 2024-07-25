import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { ExpiredTokenException } from 'src/auth/expired-token.exception';
import { InvalidTokenException } from 'src/auth/invalid-token.exception';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    let status: number;
    let message: string;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      if (exception instanceof ExpiredTokenException) {
        message = 'Token expired';
      } else if (exception instanceof InvalidTokenException) {
        message = 'Invalid token';
      } else {
        const response = exception.getResponse();
        message = (typeof response === 'string') ? response : (response as any).message;
      }
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = 'Internal server error';
    }

    const errorResponse = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
    };

    console.error(
      `HTTP Status: ${status} Error Message: ${JSON.stringify(errorResponse)}`
    );

    response.status(status).json(errorResponse);
  }
}
