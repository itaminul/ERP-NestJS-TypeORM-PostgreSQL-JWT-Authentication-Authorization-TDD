import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { DivisionService } from "./division.service";
import { CreateDivisionDTO } from "./dto/create.division.dto";
import { UpdateDivisionDTO } from "./dto/update.division.dto";

@Controller("division")
export class DivisionController {
  constructor(private readonly divisionService: DivisionService) {}

  @Get()
  async getAll() {
    try {
      const results = await this.divisionService.getAll();
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
  async create(@Body() createDto: CreateDivisionDTO) {
    try {
      const results = await this.divisionService.create(createDto);
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
  async update(@Param("id") id: number, @Body() updateDto: UpdateDivisionDTO) {
    try {
      const results = await this.divisionService.update(id, updateDto);
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
