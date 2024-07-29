import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
  } from "class-validator";
  
  export class CreateLabelDto {
    @IsNotEmpty()
    @IsString()
    labelName: string;
    @IsOptional()
    @IsString()
    labelDes: string;
    @IsOptional()
    @IsNumber()
    orgId: number;
    @IsOptional()
    @IsNumber()
    serialNo: number;
  }
  