import { Module } from "@nestjs/common";
import { DesignationModule } from "src/global-setup/designation/designation.module";

@Module({
  imports: [DesignationModule],
  providers: [],
  controllers: [],
})
export class MeetingManageSystemModule {}
