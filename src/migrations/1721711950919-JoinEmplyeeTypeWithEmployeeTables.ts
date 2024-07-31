import { MigrationInterface, QueryRunner } from "typeorm";

export class JoinEmplyeeTypeWithEmployeeTables1721711950919 implements MigrationInterface {
    name = 'JoinEmplyeeTypeWithEmployeeTables1721711950919'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_2ce27d6706d6a0a56fe273f26ae"`);
        await queryRunner.query(`ALTER TABLE "employee" RENAME COLUMN "empType" TO "empTypeId"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_ed8ed7f11ec33eb77dbd56b71ae" FOREIGN KEY ("empTypeId") REFERENCES "employee_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_ed8ed7f11ec33eb77dbd56b71ae"`);
        await queryRunner.query(`ALTER TABLE "employee" RENAME COLUMN "empTypeId" TO "empType"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_2ce27d6706d6a0a56fe273f26ae" FOREIGN KEY ("empType") REFERENCES "employee_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
