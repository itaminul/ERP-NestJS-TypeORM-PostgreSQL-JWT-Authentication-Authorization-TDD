import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRoleIdInUserTables1721797954300 implements MigrationInterface {
    name = 'AddRoleIdInUserTables1721797954300'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "roleId" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "roleId"`);
    }

}
