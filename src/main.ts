import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { TypeOrmExceptionFilter } from './exceptionFilter/TypeOrmExceptionFilter';
import { AllExceptionsFilter } from './exceptionFilter/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new TypeOrmExceptionFilter());
  app.useGlobalFilters(new AllExceptionsFilter())
  app.setGlobalPrefix('/api')
  await app.listen(3000);
}
bootstrap();
