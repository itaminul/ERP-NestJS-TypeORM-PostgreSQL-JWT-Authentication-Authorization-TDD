import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDataDefaultEmployeeTables1719893022533 implements MigrationInterface {
    name = 'CreateDataDefaultEmployeeTables1719893022533'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "salary" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "firstName" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "lastName" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "fullName" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "phone" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "mobileOne" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "mobileTwo" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "personalEmail" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "empImage" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "empSignature" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "nationalId" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "nationalId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "empSignature" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "empImage" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "personalEmail" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "mobileTwo" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "mobileOne" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "phone" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "fullName" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "lastName" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "firstName" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "salary" SET NOT NULL`);
    }

}
