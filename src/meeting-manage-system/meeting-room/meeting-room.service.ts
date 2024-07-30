import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MeetingRoom } from "src/entities/meetingRoom.entity";
import { Repository } from "typeorm";

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
  async getAllActiveByOrganizationWise() {
    return await this.meetingRoomRepository.find({
      where: {
        activeStatus: true,
        orgId: 1,
      },
      order: {
        id: "DESC",
      },
    });
  }
}
