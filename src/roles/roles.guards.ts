
import { Injectable, CanActivate, ExecutionContext, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { RouteRoleService } from './route-role.service';

@Injectable()
export class RolesGuards implements CanActivate {
  private readonly logger = new Logger(RolesGuards.name);

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private routeRoleService: RouteRoleService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = await this.userRepository.findOne({
      where: { id: request.user.id },
      relations: ['role'],
    });
    if (!user) {
      return false;
    }
    const userRoles = user.roles.map((role) => role.name);
    this.logger.debug(`User roles: ${userRoles}`);

    const requiredRoles = await this.routeRoleService.getRequiredRoles(request.route.path);
    this.logger.debug(`Required roles: ${requiredRoles}`);

    return requiredRoles.some((role) => userRoles.includes(role));
  }
}



