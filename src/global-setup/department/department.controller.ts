import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from "@nestjs/common";
import { DepartmentService } from "./department.service";
import { DepartmentCreateDTO } from "./dto/department.create.dto";
import { DepartmentUpdateDTO } from "./dto/department.update.dto";

@Controller("department")
export class DepartmentController {
  constructor(public readonly departmentService: DepartmentService) {}

  @Get()
  async getAll() {
    try {
      const results = await this.departmentService.getAll();
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
  async create(@Body() dto: DepartmentCreateDTO) {
    try {
      const results = await this.departmentService.create(dto);
      return {
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      throw error;
    }
  }

  @Patch(":id")
  async update(@Param("id") id: number, @Body() dto: DepartmentUpdateDTO) {
    try {
      const results = await this.departmentService.update(id, dto);
      return {
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      throw error;
    }
  }
  @Delete(":id")
  @HttpCode(HttpStatus.OK)
  async deleteDepartmentById(@Param("id", ParseIntPipe) id: number) {
    try {
      const results = await this.departmentService.deleteDepartmentById(id);
      return {
        success: true,
        status: HttpStatus.OK,
        results
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      } else {
        throw new HttpException(
          "Failed to delete department",
          HttpStatus.INTERNAL_SERVER_ERROR
        );
      }
    }
  }
}
