import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEmplyeeTypeEmployeeTables1721711391214 implements MigrationInterface {
    name = 'AddEmplyeeTypeEmployeeTables1721711391214'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "employee_type" ("id" SERIAL NOT NULL, "empTypeName" character varying NOT NULL, "empTypeDes" character varying, "orgId" integer, "serialNo" integer, "isActive" boolean NOT NULL DEFAULT true, "createdBy" integer, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedDate" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedTime" character varying, "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedBy" integer, CONSTRAINT "PK_f9d58855715d2ef972426e8bfef" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "employeeType" integer`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_b40942bca577bc20d4f4ee66211" FOREIGN KEY ("employeeType") REFERENCES "employee_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_b40942bca577bc20d4f4ee66211"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "employeeType"`);
        await queryRunner.query(`DROP TABLE "employee_type"`);
    }

}
