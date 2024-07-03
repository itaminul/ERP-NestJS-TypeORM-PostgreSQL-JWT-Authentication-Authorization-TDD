import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDesignationBloodgroupReligonTables1720001221122 implements MigrationInterface {
    name = 'CreateDesignationBloodgroupReligonTables1720001221122'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "designation" ("id" SERIAL NOT NULL, "designationName" character varying NOT NULL, "designationDes" character varying, "orgId" integer, "serialNo" integer, "activeStatus" boolean NOT NULL DEFAULT true, "createdBy" integer, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedDate" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedTime" character varying, "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedBy" integer, CONSTRAINT "PK_8c84a3c335a852ff2d426cb0112" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "religion" ("id" SERIAL NOT NULL, "religionName" character varying NOT NULL, "religionDes" character varying, "orgId" integer, "serialNo" integer, "activeStatus" boolean NOT NULL DEFAULT true, "createdBy" integer, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedDate" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedTime" character varying, "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedBy" integer, CONSTRAINT "PK_fcfc9cd803b178c11fd21285d30" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "blood_group" ("id" SERIAL NOT NULL, "bloodGroupName" character varying NOT NULL, "bloodGroupDes" character varying, "orgId" integer, "serialNo" integer, "activeStatus" boolean NOT NULL DEFAULT true, "createdBy" integer, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedDate" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedTime" character varying, "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedBy" integer, CONSTRAINT "PK_fa094842991eebde592423b5569" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_e41e10c17872cdf2f511e5d0097" FOREIGN KEY ("designationId") REFERENCES "designation"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_d9232c7591e1200284e6dff14ac" FOREIGN KEY ("religionId") REFERENCES "religion"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_853fc52456e9101d995297c5f9d" FOREIGN KEY ("bloodgroupId") REFERENCES "blood_group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_853fc52456e9101d995297c5f9d"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_d9232c7591e1200284e6dff14ac"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_e41e10c17872cdf2f511e5d0097"`);
        await queryRunner.query(`DROP TABLE "blood_group"`);
        await queryRunner.query(`DROP TABLE "religion"`);
        await queryRunner.query(`DROP TABLE "designation"`);
    }

}
