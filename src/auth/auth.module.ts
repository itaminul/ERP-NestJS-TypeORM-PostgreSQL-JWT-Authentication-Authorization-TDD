import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { UsersService } from "src/users/users.service";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy";
import { PassportModule } from "@nestjs/passport";
import { SessionSerializer } from "./session.serializer";

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ session: true }),
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Replace with your secret
      signOptions: { expiresIn: "2m" },
    }),
  ],
  providers: [UsersService, AuthService, JwtStrategy, JwtService, SessionSerializer],
  controllers: [AuthController],
})
export class DepartmentModule {}
