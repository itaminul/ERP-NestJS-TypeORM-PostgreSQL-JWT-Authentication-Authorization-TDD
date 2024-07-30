import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RouteRole } from 'src/entities/routeRole';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RouteRoleService {
  constructor(
    @InjectRepository(RouteRole)
    private routeRoleRepository: Repository<RouteRole>,
    private userRepository: Repository<User>,
  ) {}

  async getRequiredRoles(route: string): Promise<string[]> {
    const roles = await this.routeRoleRepository.find({ where: { route } });
    return roles.map(role => role.rolename);
  }
}
