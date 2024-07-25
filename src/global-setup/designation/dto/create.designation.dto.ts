import { Injectable } from "@nestjs/common";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

@Injectable()
export class CreateDesignationDTO {
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
}
