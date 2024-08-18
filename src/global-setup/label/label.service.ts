import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LabelEntity } from "src/entities/label.entity";
import { Repository } from "typeorm";

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
}
