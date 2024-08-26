import { Body, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LabelEntity } from "src/entities/label.entity";
import { User } from "src/entities/user.entity";
import { GetUserInfo } from "src/users/user.decorator";
import { Repository } from "typeorm";
import { CreateLabelDto } from "./dto/create.label.dto";
import { UpdateLabelDto } from "./dto/update.label.dto";
import { error } from "console";

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

  async update(
    id: number,
    userInfo: User,
    @Body() updateLabelDto: UpdateLabelDto
  ) {
    try {
      const ifExists = await this.labelRepository.findOne({
        where: {
          id: id,
        },
      });

      if (!ifExists) {
        throw new HttpException(
          {
            statusCode: HttpStatus.NOT_FOUND,
            message: "Data not found",
            error: "Not Found",
          },
          HttpStatus.NOT_FOUND
        );
      }

      if (ifExists.id) {
        ifExists.id = id;
        const customeData = {
          orgId: userInfo.orgId,
          updatedBy: userInfo.id,
        };

        const storeData = {
          ...updateLabelDto,
          ...customeData,
        };

        return await this.labelRepository.update(id, storeData);
      }
    } catch (error) {
      throw new Error("Faild to data update");
    }
  }

  async remove(id: number) {
    try {
      const checkExist = await this.labelRepository.findOne({
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
        return await this.labelRepository.delete(id);
      }
    } catch (error) {
      throw new Error("Faild to data delete");
    }
  }
}
