import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateEmployeeDepartmentTables1719917084390 implements MigrationInterface {
    name = 'CreateEmployeeDepartmentTables1719917084390'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "employee" ("id" SERIAL NOT NULL, "salary" integer NOT NULL, "firstName" character varying, "middleName" character varying NOT NULL, "lastName" character varying, "fullName" character varying, "phone" character varying, "mobileOne" character varying, "mobileTwo" character varying, "emergencyMobile" character varying NOT NULL, "officeEmail" character varying NOT NULL, "personalEmail" character varying, "empImage" character varying, "empSignature" character varying, "nationalId" integer, "createdBy" integer, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedDate" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedTime" character varying, "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedBy" integer, "departmentId" integer, CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "department" ("id" SERIAL NOT NULL, "salary" integer, "departmentName" character varying NOT NULL, "departmentDescription" character varying NOT NULL, "orgId" integer, "serialNo" integer, "activeStatus" boolean NOT NULL DEFAULT true, "createdBy" integer, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedDate" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedTime" character varying, "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedBy" integer, CONSTRAINT "PK_9a2213262c1593bffb581e382f5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_9ad20e4029f9458b6eed0b0c454" FOREIGN KEY ("departmentId") REFERENCES "department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_9ad20e4029f9458b6eed0b0c454"`);
        await queryRunner.query(`DROP TABLE "department"`);
        await queryRunner.query(`DROP TABLE "employee"`);
    }

}
