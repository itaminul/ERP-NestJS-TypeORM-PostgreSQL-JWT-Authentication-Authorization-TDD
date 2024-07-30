import { Injectable } from "@nestjs/common";
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

@Injectable()
export class UpdateMeetingRoomDTO {
  @IsNotEmpty()
  @IsString()
  roomName: string;

  @IsOptional()
  @IsString()
  roomDes: string;

  @IsOptional()
  @IsNumber()
  buildingId: number;

  @IsOptional()
  @IsNumber()
  labelId: number;

  @IsOptional()
  @IsNumber()
  orgId: number;

  @IsOptional()
  @IsNumber()
  serialNo: number;

  @IsBoolean()
  @IsNotEmpty()
  activeStatus: boolean;
}
