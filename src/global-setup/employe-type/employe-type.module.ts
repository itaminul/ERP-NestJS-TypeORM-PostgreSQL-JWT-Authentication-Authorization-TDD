import { Module } from '@nestjs/common';
import { EmployeTypeService } from './employe-type.service';
import { EmployeTypeController } from './employe-type.controller';

@Module({
  providers: [EmployeTypeService],
  controllers: [EmployeTypeController]
})
export class EmployeTypeModule {}
