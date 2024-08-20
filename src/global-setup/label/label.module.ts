import { Module } from "@nestjs/common";
import { LabelService } from "./label.service";
import { LabelController } from "./label.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LabelEntity } from "src/entities/label.entity";

@Module({
  imports: [TypeOrmModule.forFeature([LabelEntity])],
  providers: [LabelService],
  controllers: [LabelController],
})
export class LabelModule {}
