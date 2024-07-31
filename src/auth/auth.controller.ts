// src/app.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';

@Controller('app')
export class AuthController {

  @Get('user')
  getUserData() {
    return 'User data';
  }
}
