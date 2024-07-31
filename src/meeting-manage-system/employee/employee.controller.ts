import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseFilters,
  UseGuards,
} from "@nestjs/common";
import { EmployeeService } from "./employee.service";
import { CreateEmployeeDTO } from "./dto/create.employee.dto";
import { UpdateEmployeeDTO } from "./dto/update.employee.dto";
import { AllExceptionsFilter } from "src/exceptionFilter/http-exception.filter";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { AuthGuard } from "@nestjs/passport";
import { Roles } from "src/roles/roles.decorator";
import { Role } from "src/roles/role.enum";
import { RolesGuard } from "src/roles/roles.guard";

@Controller("employee")
@UseFilters(AllExceptionsFilter)
@UseGuards(AuthGuard("jwt"), RolesGuard)
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}
  @Get()
  @Roles(Role.User, Role.Admin)
  async getAll() {
    try {
      const results = await this.employeeService.getAll();
      return {
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      throw error;
    }
  }

  @Get("/getAllActive")
  @Roles(Role.Admin, Role.User)
  async getAllActive() {
    try {
      const results = await this.employeeService.getAllActive();
      return {
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      throw error;
    }
  }

  @Get("/getAllInActive")
  @Roles(Role.Admin, Role.User)
  async getAllInActive() {
    try {
      const results = await this.employeeService.getAllInactive();
      return {
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      throw error;
    }
  }

  @Post()
  @Roles(Role.Admin)
  async create(@Body() employeeDto: CreateEmployeeDTO) {
    try {
      const results = await this.employeeService.create(employeeDto);
      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: "Employee Createded successfully",
        data: results,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      } else {
        throw new HttpException(
          "Failed to create employee",
          HttpStatus.INTERNAL_SERVER_ERROR
        );
      }
    }
  }

  @Patch(":id")
  @Roles(Role.Admin, Role.User)
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateEmployeeDto: UpdateEmployeeDTO
  ) {
    try {
      const updatedEmployee = await this.employeeService.update(
        id,
        updateEmployeeDto
      );
      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: "Employee updated successfully",
        data: updatedEmployee,
      };
    } catch (error) {
      throw error;
    }
  }

  @Delete(":id")
  @Roles(Role.Admin)
  async deleteEmployeeById(@Param("id", ParseIntPipe) id: number) {
    try {
      const deleteEmployee = await this.employeeService.deleteEmployeeById(id);
      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: "Deleted successfully",
        data: deleteEmployee,
      };
    } catch (error) {
      throw error;
    }
  }
}
