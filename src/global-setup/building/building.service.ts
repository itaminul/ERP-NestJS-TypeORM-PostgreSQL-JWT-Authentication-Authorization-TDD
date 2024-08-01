import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BuildingEntity } from "src/entities/building.entity";
import { Repository } from "typeorm";

@Injectable()
export class BuildingService {
  constructor(
    @InjectRepository(BuildingEntity)
    public readonly buildingRepository: Repository<BuildingEntity>
  ) {}

  async getAll() {
    return await this.buildingRepository.find();
  }

  async getAllActive() {
    return await this.buildingRepository.find({
      where: {
        activeStatus: true,
      },
    });
  }

  async getAllInactive() {
    return await this.buildingRepository.find({
      where: {
        activeStatus: false,
      },
    });
  }
}
