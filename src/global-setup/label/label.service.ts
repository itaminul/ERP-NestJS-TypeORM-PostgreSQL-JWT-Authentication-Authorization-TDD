import { Body, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LabelEntity } from "src/entities/label.entity";
import { User } from "src/entities/user.entity";
import { GetUserInfo } from "src/users/user.decorator";
import { Repository } from "typeorm";
import { CreateLabelDto } from "./dto/create.label.dto";

@Injectable()
export class LabelService {
  constructor(
    @InjectRepository(LabelEntity)
    public readonly labelRepository: Repository<LabelEntity>
  ) {}

  async getAll() {
    return await this.labelRepository.find({
      order: {
        id: "DESC",
      },
    });
  }

  async getAllActive() {
    return await this.labelRepository.find({
      where: {
        activeStatus: true,
      },
      order: {
        id: "DESC",
      },
    });
  }

  async getAllInactive() {
    return await this.labelRepository.find({
      where: {
        activeStatus: true,
      },
      order: {
        id: "DESC",
      },
    });
  }

  async create(userInfo: User, @Body() createLabelDto: CreateLabelDto) {
    const customeData = {
      orgId: userInfo.orgId,
    };
    const storeData = {
      ...createLabelDto,
      ...customeData,
    };
    const data = this.labelRepository.create(storeData);
    return this.labelRepository.save(data);
  }
}
