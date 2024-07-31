import { MigrationInterface, QueryRunner } from "typeorm";

export class JoinEmplyeeTypeEmployeeTables1721711543515 implements MigrationInterface {
    name = 'JoinEmplyeeTypeEmployeeTables1721711543515'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_b40942bca577bc20d4f4ee66211"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "employeeType"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_2ce27d6706d6a0a56fe273f26ae" FOREIGN KEY ("empType") REFERENCES "employee_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_2ce27d6706d6a0a56fe273f26ae"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "employeeType" integer`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_b40942bca577bc20d4f4ee66211" FOREIGN KEY ("employeeType") REFERENCES "employee_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
