// users.service.ts
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDTO } from "./dto/create.user.dto";
import { UserRepository } from "./user.repository";

@Injectable()
export class UsersService {
  constructor(
    // @InjectRepository(User)
    // public readonly usersRepository: Repository<User>,
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async createUser(userDto: CreateUserDTO): Promise<User> {
    const userData = this.userRepository.create(userDto);
    return await this.userRepository.save(userData);
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username }, relations: ['roles'] });
  }
}
