import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
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
}
