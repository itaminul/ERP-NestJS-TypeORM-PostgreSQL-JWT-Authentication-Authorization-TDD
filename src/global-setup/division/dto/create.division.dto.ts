import { Injectable } from "@nestjs/common";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

@Injectable()
export class CreateDivisionDTO {
  @IsNotEmpty()
  @IsString()
  divisionName: string;

  @IsOptional()
  @IsString()
  divisionDescription: string;

  @IsOptional()
  @IsNumber()
  serialNo: number;
}
