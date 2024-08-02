import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

export class UpdateBuildingDto {
  @IsNotEmpty()
  @IsString()
  buildingName: string;
  @IsOptional()
  @IsString()
  buildingDes: string;
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
