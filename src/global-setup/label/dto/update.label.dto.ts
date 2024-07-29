import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

export class UpdateLabelDto {
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
  @IsNotEmpty()
  @IsBoolean()
  activeStatus: boolean;
}
