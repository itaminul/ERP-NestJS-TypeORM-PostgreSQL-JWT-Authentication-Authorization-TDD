import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { DesignationService } from "./designation.service";
import { UpdateDesignationDTO } from "./dto/update.designation.dto";
import { CreateDesignationDTO } from "./dto/create.designation.dto";

@Controller("designation")
export class DesignationController {
  constructor(public readonly designationService: DesignationService) {}
  @Get()
  async getAll() {
    try {
      const results = await this.designationService.getAll();

      return {
        success: true,
        status: HttpStatus.OK,
        data: results,
      };
    } catch (error) {
      throw error;
    }
  }

  async getAllActive() {
    try {
      const results = await this.designationService.getAllActive();

      return {
        success: true,
        status: HttpStatus.OK,
        data: results,
      };
    } catch (error) {
      throw error;
    }
  }

  async getAllInactive() {
    try {
      const results = await this.designationService.getAllInActive();

      return {
        success: true,
        status: HttpStatus.OK,
        data: results,
      };
    } catch (error) {
      throw error;
    }
  }
  @Post()
  async create(@Body() createDesignationDTO: CreateDesignationDTO) {
    try {
      const results =
        await this.designationService.create(createDesignationDTO);

      return {
        success: true,
        status: HttpStatus.OK,
        data: results,
      };
    } catch (error) {
      throw error;
    }
  }

  @Patch(':id')
  async update(
    @Param("id") id: number,
    @Body() updateDesignation: UpdateDesignationDTO
  ) {
    try {
      const results = await this.designationService.update(
        id,
        updateDesignation
      );

      return {
        success: true,
        status: HttpStatus.OK,
        data: results,
      };
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  async deleteDesignation(
    @Param("id") id: number
  ) {
    try {
      const results = await this.designationService.deleteDesignation(id);

      return {
        success: true,
        status: HttpStatus.OK,
        data: results,
      };
    } catch (error) {
      throw error;
    }
  }
}
