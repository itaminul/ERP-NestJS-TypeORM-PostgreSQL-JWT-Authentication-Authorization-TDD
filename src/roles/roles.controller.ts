import { Controller, Get, Post, Body } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { Role } from "src/entities/role.entity";

@Controller("roles")
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Get()
  async findAll() {
    return this.rolesService.findAll();
  }

  @Post()
  async create(@Body() role: Role) {
    return this.rolesService.create(role);
  }
}
