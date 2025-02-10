import { Module } from "@nestjs/common";
import { ClientModule } from "src/global-setup/client/client.module";
import { DesignationModule } from "src/global-setup/designation/designation.module";
import { MeetingRoomModule } from "src/meeting-manage-system/meeting-room/meeting-room.module";
import { MeetingModule } from "src/meeting-manage-system/meeting/meeting.module";

@Module({
  imports: [DesignationModule, ClientModule, MeetingRoomModule, MeetingModule],
  providers: [],
  controllers: [],
})
export class MeetingManageSystemModule {}
