import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

export class BuildingDto {
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
  @IsOptional()
  @IsBoolean()
  activeStatus: boolean;
}
