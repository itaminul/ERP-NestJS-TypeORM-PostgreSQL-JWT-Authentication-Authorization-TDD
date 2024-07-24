import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDTO } from "./dto/create.user.dto";
import { UserRepository } from "./user.repository";
import * as bcrypt from "bcrypt";
import { Response } from "express";
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    public readonly usersRepository: Repository<User>
    // @InjectRepository(UserRepository)
    // private userRepository: UserRepository,
  ) {}

  async createUser(res: Response, userDto: CreateUserDTO) {
    const user = await this.usersRepository.findOne({
      where: {
        username: userDto.username,
      },
    });

    if (user) {
      return res.status(HttpStatus.OK).send(user);
    }
    const hashPassword = await bcrypt.hash(userDto.password, 10);
    const data = {
      username: userDto.username,
      password: hashPassword,
      roleId: userDto.roleId,
      orgId: userDto.orgId,
      desigId: userDto.desigId,
      deptId: userDto.deptId,
    };
    const userData = this.usersRepository.create(data);
    return await this.usersRepository.save(userData);
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({
      where: { username },
      relations: ["roles"],
    });
  }
}
