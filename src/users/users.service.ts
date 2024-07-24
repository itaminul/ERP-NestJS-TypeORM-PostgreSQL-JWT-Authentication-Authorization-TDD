import {
  BadRequestException,
  Body,
  HttpStatus,
  Injectable,
  Res,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDTO } from "./dto/create.user.dto";
import { UserRepository } from "./user.repository";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { Response } from "express";
import { LoginUserDTO } from "./dto/loign.user.dto";
import { ConfigService } from '@nestjs/config';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    public readonly usersRepository: Repository<User>,
    private jwtService: JwtService,
    public readonly configService: ConfigService
    // @InjectRepository(UserRepository)
    // private userRepository: UserRepository,
  ) {}

  async createUser(@Res() res: Response, userDto: CreateUserDTO) {
    try {
      const existingUser = await this.usersRepository.findOne({
        where: {
          username: userDto.username,
        },
      });

      if (existingUser) {
        return res.status(HttpStatus.BAD_REQUEST).json({
          message: "User already exists",
        });
      }
      const hashPassword = await bcrypt.hash(userDto.password, 10);
      const data = {
        username: userDto.username,
        password: hashPassword,
        roleId: userDto.roleId,
        orgId: userDto.orgId,
        desigId: userDto.desigId,
        deptId: userDto.deptId,
      };
      const userData = this.usersRepository.create(data);
      return await this.usersRepository.save(userData);
    } catch (error) {
      // Handle unexpected errors
      console.error("Error creating user:", error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: "An error occurred while creating the user",
      });
    }
  }

  async login(@Res() res: Response, @Body() loginUserInput: LoginUserDTO) {
    const user = await this.usersRepository.findOne({
      where: {
        username: loginUserInput.username,
      },
    });

    if (!user) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: "User already exists",
      });
    }

    const checkPassword = await this.comparePasswords(
      loginUserInput.password,
      user.password
    );
    if (!checkPassword) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: "Invalid username or password",
      });
    }
    delete user.password;
    const { password, ...result } = user;

    if (checkPassword) {
      const accessToken = this.generateJWT({
        sub: user.id,
        username: user.username,
        deptId: user.deptId,
        desigId: user.desigId,
        roleId: user.roleId,
        orgId: user.orgId,
      });

      return {
        statusCode: 200,
        message: 'Login Successfully',
        accessToken: accessToken,
        //   userInfo:userInfo
      };
    }

  }
  generateJWT(payload: any) {
    return this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_SECRET'),
      expiresIn: this.configService.get('expired'),
    });
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({
      where: { username },
      relations: ["roles"],
    });
  }

  async comparePasswords(
    plainPassword: string,
    hashedPassword: string
  ): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }
}
 

