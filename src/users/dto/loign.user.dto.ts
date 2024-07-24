import { Injectable } from "@nestjs/common";
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

@Injectable()
export class LoginUserDTO {
  @IsString()
  @IsNotEmpty()
  username: string;
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsNumber()
  @IsOptional()
  desigId: number;

  @IsNumber()
  @IsOptional()
  roleId: number;

  @IsNumber()
  @IsOptional()
  deptId: number;

  @IsNumber()
  @IsOptional()
  orgId: number;
}
