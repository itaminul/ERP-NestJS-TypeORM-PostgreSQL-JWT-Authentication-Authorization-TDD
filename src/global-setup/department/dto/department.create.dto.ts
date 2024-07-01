import { Injectable } from "@nestjs/common";
import { IsNumber, IsOptional, IsString } from "class-validator";

@Injectable()
export class DepartmentCreateDTO {
  @IsNumber()
  @IsOptional()
  salary;

  @IsString()
  @IsOptional()
  departmentName;

  @IsString()
  @IsOptional()
  departmentDescription;

  @IsNumber()
  @IsOptional()
  orgId;

  @IsNumber()
  @IsOptional()
  serialNo;
}
