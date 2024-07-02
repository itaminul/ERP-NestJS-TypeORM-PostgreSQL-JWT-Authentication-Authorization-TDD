import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Department } from "./department.entity";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  salary: number;
  @Column({ nullable: true })
  firstName: string;
  @Column()
  middleName: string;
  @Column({ nullable: true })
  lastName: string;
  @Column({ nullable: true })
  fullName: string;
  @Column({ nullable: true })
  phone: string;
  @Column({ nullable: true })
  mobileOne: string;
  @Column({ nullable: true })
  mobileTwo: string;
  @Column()
  emergencyMobile: string;
  @Column()
  officeEmail: string;
  @Column({ nullable: true })
  personalEmail: string;
  @Column({ nullable: true })
  empImage: string;
  @Column({ nullable: true })
  empSignature: string;
  @Column({ nullable: true })
  nationalId: number;
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
  @OneToOne(() => Department)
  @JoinColumn()
  department: Department;
}
