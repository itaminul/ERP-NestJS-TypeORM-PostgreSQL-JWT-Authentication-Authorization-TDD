import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DivisionEntity } from "src/entities/division.entity";
import { Repository } from "typeorm";
import { CreateDivisionDTO } from "./dto/create.division.dto";
import { UpdateDivisionDTO } from "./dto/update.division.dto";

@Injectable()
export class DivisionService {
  constructor(
    @InjectRepository(DivisionEntity)
    private readonly divisionRepository: Repository<DivisionEntity>
  ) {}

  async getAll() {
    return await this.divisionRepository.find();
  }

  async create(createDto: CreateDivisionDTO) {
    try {
      const divisionData = this.divisionRepository.create(createDto);
      return await this.divisionRepository.save(divisionData);
    } catch (error) {
      throw new Error("Failed to save");
    }
  }

  async update(id: number, updateDto: UpdateDivisionDTO) {
    try {
      await this.divisionRepository.update(id, updateDto);
    } catch (error) {
      throw new Error("Failed to save");
    }
  }
}
