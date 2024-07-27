import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Designation } from "src/entities/designation.entity";
import { Repository } from "typeorm";
import { CreateDesignationDTO } from "./dto/create.designation.dto";

@Injectable()
export class DesignationService {
  constructor(
    @InjectRepository(Designation)
    public readonly designationRepository: Repository<Designation>
  ) {}

  async getAll() {
    const results = await this.designationRepository
      .createQueryBuilder("Designation")
      .orderBy({
        id: "DESC",
      })
      .getMany();
    return results;
  }
  async getAllActive() {
    const results = await this.designationRepository
      .createQueryBuilder("Designation")
      .where({
        activeStatus: true,
      })
      .getMany();
    return results;
  }
  async create(createDesignationDto: CreateDesignationDTO) {
    try {
      const data = this.designationRepository.create(createDesignationDto);
      return this.designationRepository.save(data);
    } catch (error) {
      throw new Error("Failed to save");
    }
  }
}
