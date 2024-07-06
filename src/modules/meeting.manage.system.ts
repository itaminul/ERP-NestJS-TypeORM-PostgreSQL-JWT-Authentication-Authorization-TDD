import { Module } from "@nestjs/common";
import { ClientModule } from "src/global-setup/client/client.module";
import { DesignationModule } from "src/global-setup/designation/designation.module";

@Module({
  imports: [DesignationModule, ClientModule],
  providers: [],
  controllers: [],
})
export class MeetingManageSystemModule {}
