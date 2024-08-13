import { Body, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BuildingEntity } from "src/entities/building.entity";
import { Repository } from "typeorm";
import { CreateBuildingDto } from "./dto/create.building.dto";
import { UpdateBuildingDto } from "./dto/update.building.dto";
import { GetUserInfo } from "src/users/user.decorator";
import { User } from "src/entities/user.entity";

@Injectable()
export class BuildingService {
  constructor(
    @InjectRepository(BuildingEntity)
    public readonly buildingRepository: Repository<BuildingEntity>
  ) {}

  async getAll() {
    return await this.buildingRepository.find({
      order: {
        id: "DESC",
      },
    });
  }

  async getAllActive() {
    return await this.buildingRepository.find({
      where: {
        activeStatus: true,
      },
      order: {
        id: "DESC",
      },
    });
  }

  async getAllInactive() {
    return await this.buildingRepository.find({
      where: {
        activeStatus: false,
      },
      order: {
        id: "DESC",
      },
    });
  }

  async create(@GetUserInfo() user: User, @Body() createBuildingDto: CreateBuildingDto) {
    try {
      const data = this.buildingRepository.create(createBuildingDto);
      return await this.buildingRepository.save(data);
    } catch (error) {
      throw new Error("Faild to data save");
    }
  }

  async update(id: number, @Body() updateBuilderDto: UpdateBuildingDto) {
    try {
      const checkExist = await this.buildingRepository.findOne({
        where: {
          id: id,
        },
      });

      if (!checkExist) {
        throw new HttpException(
          {
            statusCode: HttpStatus.NOT_FOUND,
            message: "Data not found",
            error: "Not Found",
          },
          HttpStatus.NOT_FOUND
        );
      }
      if (checkExist.id) {
        checkExist.id = id;
        return await this.buildingRepository.save(updateBuilderDto);
      }
    } catch (error) {
      throw new Error("Faild to data update");
    }
  }

  async remove(id: number) {
    try {
      const checkExist = await this.buildingRepository.findOne({
        where: {
          id: id,
        },
      });

      if (!checkExist) {
        throw new HttpException(
          {
            statusCode: HttpStatus.NOT_FOUND,
            message: "Data not found",
            error: "Not Found",
          },
          HttpStatus.NOT_FOUND
        );
      }
      if (checkExist.id) {
        checkExist.id = id;
        return await this.buildingRepository.delete(id);
      }
    } catch (error) {
      throw new Error("Faild to data delete");
    }
  }
}
