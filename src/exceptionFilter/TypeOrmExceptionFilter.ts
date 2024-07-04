import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import {
  EntityNotFoundError,
  QueryFailedError,
  CustomRepositoryNotFoundError,
  TypeORMError,
} from "typeorm";

@Catch(TypeORMError)
export class TypeOrmExceptionFilter implements ExceptionFilter {
  catch(exception: TypeORMError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = "Internal server error";

    if (exception instanceof QueryFailedError) {
      status = HttpStatus.BAD_REQUEST;
      message = "Bad request due to query failure";
    } else if (exception instanceof EntityNotFoundError) {
      status = HttpStatus.NOT_FOUND;
      message = "Entity not found";
    } else if (exception instanceof CustomRepositoryNotFoundError) {
      status = HttpStatus.BAD_REQUEST;
      message = "Repository not found";
    } else if (exception instanceof TypeORMError) {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = exception.message;
    }

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: message,
    });
  }
}
