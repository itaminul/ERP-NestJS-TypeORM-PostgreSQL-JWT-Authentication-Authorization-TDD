import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { BuildingEntity } from "./building.entity";
import { LabelEntity } from "./label.entity";

@Entity()
export class MeetingRoom {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  roomName: string;
  @Column({ nullable: true })
  roomDes: string;
  @Column({ nullable: true })
  buildingId: number;
  @Column({ nullable: true })
  labelId: number;
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
  @ManyToMany(() => BuildingEntity, (building) => building.meetingRoom, {
    nullable: true,
  })
  @JoinColumn({ name: "buildingId" })
  meetingRoom: MeetingRoom;
  @ManyToMany(() => LabelEntity, (label) => label.meetingRoomForLabel, {
    nullable: true,
  })
  @JoinColumn({ name: "labelId" })
  meetingRoomForLabel: MeetingRoom;
}
