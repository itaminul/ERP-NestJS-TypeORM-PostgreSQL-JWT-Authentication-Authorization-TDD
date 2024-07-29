import { Body, Controller, HttpStatus, Post, UseFilters, UseGuards } from "@nestjs/common";
import { LabelService } from "./label.service";
import { CreateLabelDto } from "./dto/create.label.dto";
import { GetUserInfo } from "src/users/user.decorator";
import { User } from "src/entities/user.entity";
import { AllExceptionsFilter } from "src/exceptionFilter/http-exception.filter";
import { AuthGuard } from "@nestjs/passport";
import { RolesGuard } from "src/roles/roles.guard";
import { Roles } from "src/roles/roles.decorator";
import { Role } from "src/roles/role.enum";

@Controller("label")
@UseFilters(AllExceptionsFilter)
@UseGuards(AuthGuard("jwt"), RolesGuard)
export class LabelController {
  constructor(public readonly labelService: LabelService) {}

  @Post()
  @Roles(Role.Admin, Role.User)
  async create(
    @GetUserInfo() userInfo: User,
    @Body() createLabelDto: CreateLabelDto
  ) {
    try {
        console.log("con", userInfo)
      const results = await this.labelService.create(userInfo, createLabelDto);
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
