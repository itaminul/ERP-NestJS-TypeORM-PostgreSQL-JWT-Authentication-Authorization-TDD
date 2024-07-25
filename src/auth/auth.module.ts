import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { UsersService } from "src/users/users.service";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy";

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: "your_jwt_secret", // Replace with your secret
      signOptions: { expiresIn: "2m" },
      
    }),
  ],
  providers: [UsersService, AuthService, JwtStrategy, JwtService],
  controllers: [AuthController],
})
export class DepartmentModule {}
