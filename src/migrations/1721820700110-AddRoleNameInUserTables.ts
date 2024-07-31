import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRoleNameInUserTables1721820700110 implements MigrationInterface {
    name = 'AddRoleNameInUserTables1721820700110'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "rolename" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "rolename"`);
    }

}
