import { Controller } from "@nestjs/common";
import { MeetingRoomService } from "./meeting-room.service";
import { GetUserInfo } from "src/users/user.decorator";
import { userInfo } from "os";
import { User } from "src/entities/user.entity";

@Controller("meeting-room")
export class MeetingRoomController {
  constructor(public readonly meetingRoomService: MeetingRoomService) {}
  async getAll() {
    try {
      const results = await this.meetingRoomService.getAll();
    } catch (error) {}
  }
  async getAllActive() {
    try {
      const results = await this.meetingRoomService.getAllActive();
    } catch (error) {}
  }
  async getAllInactive() {
    try {
      const results = await this.meetingRoomService.getAllInActive();
    } catch (error) {}
  }
  async getAllByOrganizationIdWIse(@GetUserInfo() userInfo: User) {
    try {
      const results =
        await this.meetingRoomService.getAllActiveByOrganizationWise(userInfo);
    } catch (error) {}
  }
}
