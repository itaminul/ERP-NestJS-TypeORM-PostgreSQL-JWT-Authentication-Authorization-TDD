import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { MeetingRoom } from "./meetingRoom.entity";

@Entity()
export class BuildingEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  buildingName: string;
  @Column({ nullable: true })
  buildingDes: string;
  @Column({ nullable: true })
  orgId: number;
  @Column({ nullable: true })
  serialNo: number;
  @Column({ default: true })
  activeStatus: boolean;
  @Column({ nullable: true })
  createdBy: number;
  @CreateDateColumn({ type: "timestamptz", nullable: true })
  createdAt: Date;
  @UpdateDateColumn({ type: "timestamptz", nullable: true })
  updatedDate: string;
  @Column({ nullable: true })
  updatedTime: string;
  @UpdateDateColumn({ type: "timestamptz", nullable: true })
  updatedAt: Date;
  @Column({ nullable: true })
  updatedBy: number;
  @OneToMany(() => MeetingRoom, (meetingRoom) => meetingRoom.buildingId)
  meetingRoom: MeetingRoom[]
}
