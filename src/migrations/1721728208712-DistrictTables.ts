import { MigrationInterface, QueryRunner } from "typeorm";

export class DistrictTables1721728208712 implements MigrationInterface {
    name = 'DistrictTables1721728208712'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "district_entity" ("id" SERIAL NOT NULL, "districtName" character varying NOT NULL, "districtDescription" character varying, "serialNo" integer, "activeStatus" boolean NOT NULL DEFAULT true, "createdBy" integer, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedDate" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedTime" character varying, "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedBy" integer, CONSTRAINT "PK_239253e956b7d23f2292b68b154" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "districtId" integer`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_7c4b6339b780fb0d3ee8287e9ad" FOREIGN KEY ("districtId") REFERENCES "district_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_7c4b6339b780fb0d3ee8287e9ad"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "districtId"`);
        await queryRunner.query(`DROP TABLE "district_entity"`);
    }

}
