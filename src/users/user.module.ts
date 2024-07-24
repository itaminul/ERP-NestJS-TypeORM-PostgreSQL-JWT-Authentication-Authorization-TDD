import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { UsersService } from "./users.service";
import { UserController } from "./dto/user.controller";
import { AuthService } from "src/auth/auth.service";
import { AuthController } from "src/auth/auth.controller";
import { JwtService } from "@nestjs/jwt";
import { UserRepository } from "./user.repository";

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRepository])],
  providers: [UsersService],
  controllers: [UserController],
  exports: [UsersService] 
})
export class UserModule {}
