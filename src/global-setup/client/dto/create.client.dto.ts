import { Injectable } from "@nestjs/common";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

@Injectable()
export class CreateClientDTO {
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
  @IsNumber()
  serialNo: number;
}
