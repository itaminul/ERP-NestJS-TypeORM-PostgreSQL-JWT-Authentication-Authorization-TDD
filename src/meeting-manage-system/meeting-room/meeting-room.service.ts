import { Body, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MeetingRoom } from "src/entities/meetingRoom.entity";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { CreateMeetingRoomDTO } from "./dto/create.meeting.room.dto";

@Injectable()
export class MeetingRoomService {
  constructor(
    @InjectRepository(MeetingRoom)
    public readonly meetingRoomRepository: Repository<MeetingRoom>
  ) {}

  async getAll() {
    return await this.meetingRoomRepository.find({
      order: {
        id: "DESC",
      },
    });
  }

  async getAllActive() {
    return await this.meetingRoomRepository.find({
      where: {
        activeStatus: true,
      },
      order: {
        id: "DESC",
      },
    });
  }

  async getAllInActive() {
    return await this.meetingRoomRepository.find({
      where: {
        activeStatus: true,
      },
      order: {
        id: "DESC",
      },
    });
  }
  async getAllActiveByOrganizationWise(userInfo: User) {
    return await this.meetingRoomRepository.find({
      where: {
        activeStatus: true,
        orgId: userInfo.orgId,
      },
      order: {
        id: "DESC",
      },
    });
  }

  async create(
    userInfo: User,
    @Body() createMeetingRoomDto: CreateMeetingRoomDTO
  ) {
    try {
      const getUserInfo = {
        createdBy: userInfo.id,
      };
      const data = {
        ...createMeetingRoomDto,
        ...getUserInfo,
      };
      const dataStore = this.meetingRoomRepository.create(data);
      return await this.meetingRoomRepository.save(dataStore);
    } catch (error) {
      throw error;
    }
  }
}
