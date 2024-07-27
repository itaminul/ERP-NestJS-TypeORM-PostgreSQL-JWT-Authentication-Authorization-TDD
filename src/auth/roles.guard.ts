// import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { JwtAuthGuard } from './jwt-auth.guard';

// @Injectable()
// export class RolesGuard extends JwtAuthGuard implements CanActivate {
//   constructor(private reflector: Reflector) {
//     super();
//   }

//   canActivate(context: ExecutionContext): boolean {
//     const roles = this.reflector.get<string[]>('roles', context.getHandler());
//     if (!roles) {
//       return true;
//     }
//     const request = context.switchToHttp().getRequest();
//     const user = request.user;
//     return roles.includes(user.rolename);
//   }
// }




import { Injectable, CanActivate, ExecutionContext, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { User } from 'src/entities/user.entity';
import { ROLES_KEY } from 'src/roles/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  private readonly logger = new Logger(RolesGuard.name);

  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }

    const { user }: { user: User } = context.switchToHttp().getRequest();
    console.log(`User roles: ${user.rolename}, Required roles: ${requiredRoles}`);
    this.logger.debug(`User roles: ${user.rolename}, Required roles: ${requiredRoles}`);
    return requiredRoles.some((role) => user.rolename?.includes(role));
  }
}



