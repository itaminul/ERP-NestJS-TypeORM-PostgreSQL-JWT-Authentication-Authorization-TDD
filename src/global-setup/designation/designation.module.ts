import { Module } from "@nestjs/common";
import { DesignationController } from "./designation.controller";
import { DesignationService } from "./designation.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Designation } from "src/entities/designation.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Designation])],
  controllers: [DesignationController],
  providers: [DesignationService],
})
export class DesignationModule {}
