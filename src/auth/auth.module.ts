import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { UsersService } from "src/users/users.service";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: "your_jwt_secret", // Replace with your secret
      signOptions: { expiresIn: "60m" },
      
    }),
  ],
  providers: [UsersService, AuthService],
  controllers: [AuthController],
})
export class DepartmentModule {}
