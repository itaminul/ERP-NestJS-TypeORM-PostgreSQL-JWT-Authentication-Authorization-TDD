import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  UseFilters,
  UseGuards,
} from "@nestjs/common";
import { MeetingRoomService } from "./meeting-room.service";
import { GetUserInfo } from "src/users/user.decorator";
import { userInfo } from "os";
import { User } from "src/entities/user.entity";
import { CreateMeetingRoomDTO } from "./dto/create.meeting.room.dto";
import { AllExceptionsFilter } from "src/exceptionFilter/http-exception.filter";
import { AuthGuard } from "@nestjs/passport";
import { RolesGuard } from "src/roles/roles.guard";
import { Roles } from "src/roles/roles.decorator";
import { Role } from "src/roles/role.enum";

@Controller("meeting-room")
@UseFilters(AllExceptionsFilter)
@UseGuards(AuthGuard("jwt"), RolesGuard)
export class MeetingRoomController {
  constructor(public readonly meetingRoomService: MeetingRoomService) {}
  @Get()
  @Roles(Role.Admin, Role.User)
  async getAll() {
    try {
      const results = await this.meetingRoomService.getAll();
      return {
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      throw error;
    }
  }
  @Get()
  @Roles(Role.Admin, Role.User)
  async getAllActive() {
    try {
      const results = await this.meetingRoomService.getAllActive();
      return {
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      throw error;
    }
  }
  @Get()
  @Roles(Role.Admin, Role.User)
  async getAllInactive() {
    try {
      const results = await this.meetingRoomService.getAllInActive();
      return {
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      throw error;
    }
  }
  @Get()
  @Roles(Role.Admin, Role.User)
  async getAllByOrganizationIdWIse(@GetUserInfo() userInfo: User) {
    try {
      const results =
        await this.meetingRoomService.getAllActiveByOrganizationWise(userInfo);
        return {
            success: true,
            status: HttpStatus.OK,
            results,
          };
        } catch (error) {
          throw error;
        }
  }

  @Post()
  @Roles(Role.Admin, Role.User)
  async create(
    @GetUserInfo() userInfo: User,
    @Body() createMeetingRoomDto: CreateMeetingRoomDTO
  ) {
    try {
      const results = await this.meetingRoomService.create(
        userInfo,
        createMeetingRoomDto
      );
      return {
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      throw error;
    }
  }
}
