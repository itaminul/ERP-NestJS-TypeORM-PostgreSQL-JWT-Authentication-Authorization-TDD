import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRoutePermissionTables1722399216186 implements MigrationInterface {
    name = 'CreateRoutePermissionTables1722399216186'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "route_permission" ("id" SERIAL NOT NULL, "route" character varying NOT NULL, "method" character varying NOT NULL, "roles" character varying NOT NULL, CONSTRAINT "PK_ca9acacffe7171a328be94cfa57" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "route_permission"`);
    }

}
