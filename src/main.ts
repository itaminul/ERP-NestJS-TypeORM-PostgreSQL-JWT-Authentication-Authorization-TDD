import { NestFactory, Reflector } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { TypeOrmExceptionFilter } from "./exceptionFilter/TypeOrmExceptionFilter";
import { AllExceptionsFilter } from "./exceptionFilter/http-exception.filter";
import { RolesGuard } from "./common/guards/les.guard";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new TypeOrmExceptionFilter());
  app.useGlobalFilters(new AllExceptionsFilter());
  const reflector = app.get(Reflector);
  app.useGlobalGuards(new RolesGuard(reflector));
  app.setGlobalPrefix("/api");
  await app.listen(3001);
}
bootstrap();
