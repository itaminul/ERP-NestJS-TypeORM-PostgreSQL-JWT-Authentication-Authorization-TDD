import { Injectable } from "@nestjs/common";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

@Injectable()
export class EmployeeTypeCreateDTO {
  @IsNotEmpty()
  @IsString()
  empTypeName: string;
  @IsOptional()
  @IsString()
  empTypeDes: string;
  @IsOptional()
  @IsNumber()
  orgId: number;
  @IsOptional()
  @IsNumber()
  serialNo: number;
}
