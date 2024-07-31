import { Module } from "@nestjs/common";
import { EmployeeService } from "./employee.service";
import { EmployeeController } from "./employee.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Employee } from "../../entities/employee.entity";
import { Department } from "src/entities/department.entity";
import { EmployeeType } from "src/entities/employeeType.entity";
import { DivisionEntity } from "src/entities/division.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Employee, Department, EmployeeType, DivisionEntity])],
  providers: [EmployeeService],
  controllers: [EmployeeController],
})
export class EmployeeModule {}
