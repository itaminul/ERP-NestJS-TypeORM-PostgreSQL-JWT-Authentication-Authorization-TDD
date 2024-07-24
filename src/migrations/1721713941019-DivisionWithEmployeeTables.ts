import { MigrationInterface, QueryRunner } from "typeorm";

export class DivisionWithEmployeeTables1721713941019 implements MigrationInterface {
    name = 'DivisionWithEmployeeTables1721713941019'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "division_entity" ("id" SERIAL NOT NULL, "divisionName" character varying NOT NULL, "divisionDescription" character varying, "serialNo" integer, "activeStatus" boolean NOT NULL DEFAULT true, "createdBy" integer, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedDate" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedTime" character varying, "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedBy" integer, CONSTRAINT "PK_3639642966c35f1e1ff4cd0c82d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "divisionId" integer`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_ec50cda58bc1e0e8510033b1632" FOREIGN KEY ("divisionId") REFERENCES "division_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_ec50cda58bc1e0e8510033b1632"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "divisionId"`);
        await queryRunner.query(`DROP TABLE "division_entity"`);
    }

}
