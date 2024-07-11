import { IsBoolean, IsNumber, IsString } from "class-validator";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Employee } from "./employee.entity";

@Entity()
export class BloodGroup {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  @IsString()
  bloodGroupName: string;
  @Column({ nullable: true })
  @IsString()
  bloodGroupDes: string;
  @Column({ nullable: true })
  @IsNumber()
  orgId: number;
  @Column({ nullable: true })
  @IsNumber()
  serialNo: number;
  @Column({ default: true })
  @IsBoolean()
  activeStatus;
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
  @OneToMany(() => Employee, (employee) => employee.bloodGroupId)
  employees: Employee[];
}
