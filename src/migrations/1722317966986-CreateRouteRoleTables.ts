import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRouteRoleTables1722317966986 implements MigrationInterface {
    name = 'CreateRouteRoleTables1722317966986'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "route_role" ("id" SERIAL NOT NULL, "route" character varying NOT NULL, "rolename" character varying NOT NULL, CONSTRAINT "PK_900d7a68c069b158f3bdf296c8b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "route_role"`);
    }

}
