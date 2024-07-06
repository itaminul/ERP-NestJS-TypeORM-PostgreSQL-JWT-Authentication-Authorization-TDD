import { Injectable } from "@nestjs/common";
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

@Injectable()
export class UpdateClientDTO {
  @IsNotEmpty()
  @IsString()
  clientName: string;
  @IsOptional()
  @IsString()
  clientDescription: string;
  @IsOptional()
  @IsString()
  clientPhone: string;
  @IsOptional()
  @IsString()
  clientEmail: string;
  @IsOptional()
  @IsNumber()
  clientType: number;
  @IsOptional()
  @IsNumber()
  orgId: number;
  @IsOptional()
  @IsString()
  serialNo: string;
  @IsNotEmpty()
  @IsBoolean()
  activeStatus: boolean;
}
