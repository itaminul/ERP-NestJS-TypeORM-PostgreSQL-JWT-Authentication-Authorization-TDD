import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Client } from "src/entities/client.entity";
import { Repository } from "typeorm";
import { CreateClientDTO } from "./dto/create.client.dto";

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

  async create(createClientDTO: CreateClientDTO) {
    const clientData = this.clientRepository.create(createClientDTO);
    return await this.clientRepository.save(clientData);
  }
}
