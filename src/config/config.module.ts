// src/config/config.module.ts
import { Module } from "@nestjs/common";
import { ConfigModule as NestConfigModule } from "@nestjs/config";
import { ConfigService } from "./config.service";

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true, // make sure to import globally
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService], // export ConfigService to be used by other modules
})
export class ConfigModule {}
