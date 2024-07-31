import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Res,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDTO } from "./dto/create.user.dto";
import { Response } from "express";
import { LoginUserDTO } from "./dto/loign.user.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async create(@Res() res: Response, @Body() userDto: CreateUserDTO) {
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

  @Post('login')
  async login(@Res() res: Response, @Body() loginUserDTO: LoginUserDTO) {
    try {
      const results = await this.userService.login(res, loginUserDTO);
      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: "Login successfully",
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
