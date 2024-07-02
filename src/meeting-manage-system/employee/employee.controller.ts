import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from "@nestjs/common";
import { EmployeeService } from "./employee.service";
import { CreateEmployeeDTO } from "./dto/create.employee.dto";

@Controller("employee")
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
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
  @Post()
  async creaet(@Body() employeeDto: CreateEmployeeDTO) {
    try {
      const results = await this.employeeService.create(employeeDto);
      return {
        success: true,
        status: HttpStatus.OK,
        results,
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

  async update() {
    try {
    } catch (error) {}
  }
}
