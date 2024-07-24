import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "./config/config.module";
import { ConfigService } from "./config/config.service";
import { EmployeeModule } from "./meeting-manage-system/employee/employee.module";
import { DepartmentModule } from "./global-setup/department/department.module";
import { dataSourceOptions } from "./data-source";
import { APP_FILTER } from "@nestjs/core";
import { AllExceptionsFilter } from "./exceptionFilter/http-exception.filter";
import { MeetingManageSystemModule } from "./modules/meeting.manage.system";
import { EmployeTypeModule } from "./global-setup/employe-type/employe-type.module";
import { UserModule } from "./users/user.module";
import { AuthService } from "./auth/auth.service";
import { UsersService } from "./users/users.service";
import { JwtService } from "@nestjs/jwt";
import { DivisionModule } from './global-setup/division/division.module';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) =>
        configService.getTypeOrmConfig(),
      inject: [ConfigService],
    }),
    UserModule,
    EmployeeModule,
    DepartmentModule,
    MeetingManageSystemModule,
    EmployeTypeModule,
    DivisionModule,
  ],
  controllers: [AppController],
  providers: [
    AppService, // Add AppService to the providers array
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    // AuthService,
    // UsersService,
    JwtService
  ],
})
export class AppModule {}

