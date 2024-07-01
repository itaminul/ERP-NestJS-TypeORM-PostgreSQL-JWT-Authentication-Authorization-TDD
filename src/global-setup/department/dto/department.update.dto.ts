import { Injectable } from "@nestjs/common";
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

@Injectable()
export class DepartmentUpdateDTO {
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

  @IsBoolean()
  @IsNotEmpty()
  activeStatus;
}
