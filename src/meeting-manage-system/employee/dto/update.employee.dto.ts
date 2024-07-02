import { Injectable } from "@nestjs/common";
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

@Injectable()
export class UpdateEmployeeDTO {
  @IsNumber()
  @IsOptional()
  salary: number;
  @IsString()
  @IsOptional()
  firstName: string;
  @IsNotEmpty()
  @IsString()
  middleName: string;
  @IsString()
  @IsOptional()
  lastName: string;
  @IsString()
  @IsOptional()
  fullName: string;
  @IsString()
  @IsOptional()
  phone: string;
  @IsString()
  @IsOptional()
  mobileOne: string;
  @IsString()
  @IsOptional()
  mobileTwo: string;
  @IsNotEmpty()
  @IsString()
  emergencyMobile: string;
  @IsNotEmpty()
  @IsString()
  officeEmail: string;
  @IsString()
  @IsOptional()
  personalEmail: string;
  @IsString()
  @IsOptional()
  empImage: string;
  @IsString()
  @IsOptional()
  empSignature: string;
  @IsString()
  @IsOptional()
  nationalId: string;
  @IsNumber()
  @IsOptional()
  createdBy: number;
  @IsBoolean()
  @IsNotEmpty()
  activeStatus;
}
