import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";
import * as bcrypt from "bcrypt";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { Role } from "src/entities/role.entity";
import { RoutePermission } from "src/entities/routePermission";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    public readonly userRepositoryRepository: Repository<User>,
    @InjectRepository(Role)
    public readonly roleRepositoryRepositoyr: Repository<Role>,
    @InjectRepository(RoutePermission)
    public readonly routePermissionRepository: Repository<RoutePermission>,
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async getUserRoles(userId: number) {
    const user = await this.userRepositoryRepository.findOne({
      where: {
        id: userId,
      },
      relations: {
        roles: true,
      },
    });
    return user.roles.map((role) => role.name);
  }

  async getRouteRoles(route: string, method: string) {
    const routePermission = await this.routePermissionRepository.findOne({
      where: {
        route,
        method,
      },
    });
    return routePermission ? routePermission.roles.split(",") : [];
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async comparePasswords(
    plainPassword: string,
    hashedPassword: string
  ): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }

  generateJwtToken(payload: any): string {
    return this.jwtService.sign(payload);
  }
}
