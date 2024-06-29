import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config/config.module';
import { ConfigService } from "./config/config.service";
import { EmployeeModule } from './meeting-manage-system/employee/employee.module';
import { DepartmentModule } from './global-setup/department/department.module';
import { AppDataSource } from '../data-source';
@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRoot(AppDataSource.options),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) =>
        configService.getTypeOrmConfig(),
      inject: [ConfigService],
    }),
    EmployeeModule,
    DepartmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
