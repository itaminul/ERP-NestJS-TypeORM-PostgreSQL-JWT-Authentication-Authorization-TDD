import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Designation } from "src/entities/designation.entity";
import { Repository } from "typeorm";
import { CreateDesignationDTO } from "./dto/create.designation.dto";
import { UpdateDesignationDTO } from "./dto/update.designation.dto";

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
  async getAllInActive() {
    const results = await this.designationRepository
      .createQueryBuilder("Designation")
      .where({
        activeStatus: false,
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

  async update(id: number, updateDesignationDto: UpdateDesignationDTO) {
    try {
      const designation = await this.designationRepository.findOne({
        where: { id: id },
      });

      if (!designation) {
        throw new HttpException(
          {
            statusCode: HttpStatus.NOT_FOUND,
            message: "Designation not found",
            error: "Not Found",
          },
          HttpStatus.NOT_FOUND
        );
      }

      return this.designationRepository.update(id, updateDesignationDto);
    } catch (error) {
      throw new Error("Failed to save");
    }
  }

  async deleteDesignation(id: number) {
    try {
      const result = await this.designationRepository.delete(id);
      if (result.affected === 0) {
        throw new HttpException("Employee not found", HttpStatus.NOT_FOUND);
      }
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        "Failed to delete employee",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
