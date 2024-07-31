import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMeetingRoomBuildingLabelTables1722153716641 implements MigrationInterface {
    name = 'CreateMeetingRoomBuildingLabelTables1722153716641'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "building_entity" ("id" SERIAL NOT NULL, "buildingName" character varying NOT NULL, "buildingDes" character varying, "orgId" integer, "serialNo" integer, "activeStatus" boolean NOT NULL DEFAULT true, "createdBy" integer, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedDate" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedTime" character varying, "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedBy" integer, CONSTRAINT "PK_b39acf71607c6efb539b89ba2d1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "label_entity" ("id" SERIAL NOT NULL, "labelName" character varying NOT NULL, "labelDes" character varying, "orgId" integer, "serialNo" integer, "activeStatus" boolean NOT NULL DEFAULT true, "createdBy" integer, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedDate" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedTime" character varying, "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedBy" integer, CONSTRAINT "PK_6655d360cb34f17da3b55cd4194" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "meeting_room" ("id" SERIAL NOT NULL, "roomName" character varying NOT NULL, "roomDes" character varying, "buildingId" integer, "labelId" integer, "orgId" integer, "serialNo" integer, "activeStatus" boolean NOT NULL DEFAULT true, "createdBy" integer, "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedDate" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedTime" character varying, "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updatedBy" integer, CONSTRAINT "PK_b7d15017d9ca3581550483bcc1c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "meeting_room"`);
        await queryRunner.query(`DROP TABLE "label_entity"`);
        await queryRunner.query(`DROP TABLE "building_entity"`);
    }

}
