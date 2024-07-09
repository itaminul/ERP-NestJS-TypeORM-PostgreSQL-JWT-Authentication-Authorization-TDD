import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config/config.module';
import { ConfigService } from "./config/config.service";
import { EmployeeModule } from './meeting-manage-system/employee/employee.module';
import { DepartmentModule } from './global-setup/department/department.module';
import { dataSourceOptions } from './data-source';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './exceptionFilter/http-exception.filter';
import { MeetingManageSystemModule } from './modules/meeting.manage.system';


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
    EmployeeModule,
    DepartmentModule,
    MeetingManageSystemModule
  ],
  controllers: [AppController],
  providers: [
    AppService, // Add AppService to the providers array
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}



