import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateEmployeeAndDepartmentTables1719748602692 implements MigrationInterface {
    name = 'CreateEmployeeAndDepartmentTables1719748602692'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "department" ("id" SERIAL NOT NULL, "salary" integer NOT NULL, "departmentName" character varying NOT NULL, "departmentDescription" character varying NOT NULL, "orgId" integer NOT NULL, "serialNo" integer NOT NULL, "activeStatus" boolean NOT NULL DEFAULT true, "createdBy" integer NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedTime" character varying NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedBy" integer NOT NULL, CONSTRAINT "PK_9a2213262c1593bffb581e382f5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employee" ("id" SERIAL NOT NULL, "salary" integer NOT NULL, "firstName" character varying NOT NULL, "middleName" character varying NOT NULL, "lastName" character varying NOT NULL, "fullName" character varying NOT NULL, "phone" character varying NOT NULL, "mobileOne" character varying NOT NULL, "mobileTwo" character varying NOT NULL, "emergencyMobile" character varying NOT NULL, "officeEmail" character varying NOT NULL, "personalEmail" character varying NOT NULL, "empImage" character varying NOT NULL, "empSignature" character varying NOT NULL, "nationalId" integer NOT NULL, "departmentId" integer, CONSTRAINT "REL_9ad20e4029f9458b6eed0b0c45" UNIQUE ("departmentId"), CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_9ad20e4029f9458b6eed0b0c454" FOREIGN KEY ("departmentId") REFERENCES "department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_9ad20e4029f9458b6eed0b0c454"`);
        await queryRunner.query(`DROP TABLE "employee"`);
        await queryRunner.query(`DROP TABLE "department"`);
    }

}
