import { Module } from "@nestjs/common";
import { MeetingRoomController } from "./meeting-room.controller";
import { MeetingRoomService } from "./meeting-room.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MeetingRoom } from "src/entities/meetingRoom.entity";

@Module({
  imports: [TypeOrmModule.forFeature([MeetingRoom])],
  controllers: [MeetingRoomController],
  providers: [MeetingRoomService],
})
export class MeetingRoomModule {}
