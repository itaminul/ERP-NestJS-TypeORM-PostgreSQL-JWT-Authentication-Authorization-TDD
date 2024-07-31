import { Module } from "@nestjs/common";
import { DivisionController } from "./division.controller";
import { DivisionService } from "./division.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DivisionEntity } from "src/entities/division.entity";

@Module({
  imports: [TypeOrmModule.forFeature([DivisionEntity])],
  controllers: [DivisionController],
  providers: [DivisionService],
})
export class DivisionModule {}
