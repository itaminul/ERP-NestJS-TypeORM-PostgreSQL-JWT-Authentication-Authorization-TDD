import { Injectable } from "@nestjs/common";
import { IsNumber, IsOptional, IsString } from "class-validator";

@Injectable()
export class CreateUserDTO {
  @IsString()
  @IsOptional()
  username: string;
  @IsString()
  @IsString()
  password: string;

  createdBy: number;
  @IsNumber()
  @IsOptional()
  orgId: number;
}
