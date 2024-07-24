import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from "@nestjs/common";
import { UsersService } from "../users.service";
import { CreateUserDTO } from "./create.user.dto";
import { Response } from "express";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async creaet(res: Response, @Body() userDto: CreateUserDTO) {
    try {
      const results = await this.userService.createUser(res, userDto);
      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: "Information Createded successfully",
        data: results,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      } else {
        throw new HttpException(
          "Failed to create",
          HttpStatus.INTERNAL_SERVER_ERROR
        );
      }
    }
  }
}
