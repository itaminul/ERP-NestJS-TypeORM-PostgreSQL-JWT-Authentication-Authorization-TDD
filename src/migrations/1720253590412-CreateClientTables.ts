import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateClientTables1720253590412 implements MigrationInterface {
    name = 'CreateClientTables1720253590412'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client" ("id" SERIAL NOT NULL, "clientName" character varying NOT NULL, "clientDescription" character varying, "clientAddress" character varying, "clientPhone" character varying, "clientEmail" character varying, "clientType" integer NOT NULL DEFAULT '1', "orgId" integer, "serialNo" integer, "activeStatus" boolean NOT NULL DEFAULT true, "createdBy" integer, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedDate" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedTime" character varying, "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedBy" integer, CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id")); COMMENT ON COLUMN "client"."clientType" IS 'Client type like home and abroad and 1 for home and 2 for aboard'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "client"`);
    }

}
