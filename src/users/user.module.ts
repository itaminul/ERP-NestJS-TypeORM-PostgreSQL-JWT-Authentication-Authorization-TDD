import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { UsersService } from "./users.service";
import { UserController } from "./user.controller";
import { AuthService } from "src/auth/auth.service";
import { AuthController } from "src/auth/auth.controller";
import { JwtService } from "@nestjs/jwt";
import { UserRepository } from "./user.repository";
import { JwtStrategy } from "src/auth/jwt.strategy";

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRepository])],
  providers: [UsersService, JwtService, JwtStrategy],
  controllers: [UserController],
  exports: [UsersService],
})
export class UserModule {}
