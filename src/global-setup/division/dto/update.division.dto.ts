import { Injectable } from "@nestjs/common";
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

@Injectable()
export class UpdateDivisionDTO {
  @IsNotEmpty()
  @IsString()
  divisionName: string;

  @IsOptional()
  @IsString()
  divisionDescription: string;

  @IsOptional()
  @IsNumber()
  serialNo: number;

  @IsNotEmpty()
  @IsBoolean()
  activeStatus: boolean;
}
