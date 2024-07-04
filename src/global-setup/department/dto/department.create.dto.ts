import { Injectable } from "@nestjs/common";
import { IsNumber, IsOptional, IsString } from "class-validator";

@Injectable()
export class DepartmentCreateDTO {
  @IsNumber()
  @IsOptional()
  salary: number

  @IsString()
  @IsOptional()
  departmentName: string

  @IsString()
  @IsOptional()
  departmentDescription: string

  @IsNumber()
  @IsOptional()
  orgId: number

  @IsNumber()
  @IsOptional()
  serialNo: number
}
