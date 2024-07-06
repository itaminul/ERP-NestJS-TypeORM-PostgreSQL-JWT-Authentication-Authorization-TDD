import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Client } from "src/entities/client.entity";
import { Repository } from "typeorm";
import { CreateClientDTO } from "./dto/create.client.dto";
import { UpdateClientDTO } from "./dto/update.client.dto";

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    public readonly clientRepository: Repository<Client>
  ) {}

  async getAll() {
    return await this.clientRepository
      .createQueryBuilder("Client")
      .where({ orgId: 1 })
      .getMany();
  }

  async getAllActive() {
    return await this.clientRepository
      .createQueryBuilder("Client")
      .where({ orgId: 1 })
      .where({ activeStatus: true })
      .getMany();
  }

  async getAllInactive() {
    return await this.clientRepository
      .createQueryBuilder("Client")
      .where({ orgId: 1 })
      .where({ activeStatus: true })
      .getMany();
  }

  async create(createClientDTO: CreateClientDTO) {
    const clientData = this.clientRepository.create(createClientDTO);
    return await this.clientRepository.save(clientData);
  }

  async update(id: number, updateClientDTO: UpdateClientDTO) {
    const ifExist = await this.clientRepository.findOne({ where: { id: id } });
    if (!ifExist) {
      throw new HttpException("Data not found", HttpStatus.NOT_FOUND);
    }
    return await this.clientRepository.update(id, updateClientDTO);
  }

  async deleteClientById(id: number) {
    try {
      const result = await this.clientRepository.delete(id);
      if (result.affected === 0) {
        throw new HttpException("Data not found", HttpStatus.NOT_FOUND);
      }
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        "Failed to delete data",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
