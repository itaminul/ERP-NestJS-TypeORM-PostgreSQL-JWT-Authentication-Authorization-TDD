import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Designation } from "src/entities/designation.entity";
import { Repository } from "typeorm";

@Injectable()
export class DesignationService {
  constructor(
    @InjectRepository(Designation)
    public readonly useRepository: Repository<Designation>
  ) {}

  async getAll() {
    const results = await this.useRepository
      .createQueryBuilder("Designation")
      .getMany();
    return results;
  }
}
