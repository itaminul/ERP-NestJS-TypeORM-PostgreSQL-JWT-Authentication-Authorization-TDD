import { Injectable } from "@nestjs/common";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

@Injectable()
export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  username: string;
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  rolename: string;

  @IsNumber()
  @IsOptional()
  desigId: number;

  @IsNumber()
  @IsOptional()
  roleId: number;

  @IsNumber()
  @IsOptional()
  deptId: number;

  createdBy: number;
  @IsNumber()
  @IsOptional()
  orgId: number;
}
