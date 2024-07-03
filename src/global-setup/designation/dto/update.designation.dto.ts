import { Injectable } from "@nestjs/common";
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

@Injectable()
export class UpdateDesignationDTO {
  @IsNotEmpty()
  @IsString()
  designationName: string;

  @IsOptional()
  @IsString()
  designationDes: string;

  @IsOptional()
  @IsNumber()
  orgId: number;

  @IsOptional()
  @IsNumber()
  serialNo: number;

  @IsNotEmpty()
  @IsBoolean()
  activeStatus: boolean;
}
