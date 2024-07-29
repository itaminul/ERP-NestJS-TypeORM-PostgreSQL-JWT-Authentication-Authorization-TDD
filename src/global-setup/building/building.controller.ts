import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseFilters,
  UseGuards,
} from "@nestjs/common";
import { BuildingService } from "./building.service";
import { CreateBuildingDto } from "./dto/create.building.dto";
import { UpdateBuildingDto } from "./dto/update.building.dto";
import { AllExceptionsFilter } from "src/exceptionFilter/http-exception.filter";
import { AuthGuard } from "@nestjs/passport";
import { Roles } from "src/roles/roles.decorator";
import { Role } from "src/roles/role.enum";

@Controller("building")
@UseFilters(AllExceptionsFilter)
@UseGuards(AuthGuard("jwt"))
export class BuildingController {
  constructor(public readonly buildingService: BuildingService) {}
  @Get()
  @Roles(Role.Admin, Role.User)
  async getAll() {
    try {
      const results = await this.buildingService.getAll();
      return {
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      throw error;
    }
  }
  @Roles(Role.Admin)
  @Post()
  async create(@Body() createBuildingDto: CreateBuildingDto) {
    try {
      const results = await this.buildingService.create(createBuildingDto);
      return {
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      throw error;
    }
  }
  @Roles(Role.Admin)
  @Patch(":id")
  async update(
    @Param("id") id: number,
    @Body() updateBuildingDto: UpdateBuildingDto
  ) {
    try {
      const results = await this.buildingService.update(id, updateBuildingDto);
      return {
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      throw error;
    }
  }
  @Roles(Role.Admin)
  @Delete(":id")
  async remove(@Param("id") id: number) {
    try {
      const results = await this.buildingService.remove(id);
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
