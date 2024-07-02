import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDateUpdateDateEmployeeTables1719895109519 implements MigrationInterface {
    name = 'CreateDateUpdateDateEmployeeTables1719895109519'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" ADD "createdBy" integer`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "updatedDate" TIMESTAMP WITH TIME ZONE DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "updatedTime" character varying`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "updatedBy" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "updatedBy"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "updatedTime"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "updatedDate"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "createdBy"`);
    }

}
