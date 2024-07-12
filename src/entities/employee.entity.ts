import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Department } from "./department.entity";
import { Designation } from "./designation.entity";
import { Religion } from "./religion.entity";
import { BloodGroup } from "./bloodgroup.entity";
import { IsBoolean, IsNumber } from "class-validator";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
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
  @Column({ nullable: false })
  officeEmail: string;
  @Column({ nullable: true })
  personalEmail: string;
  @Column({ nullable: true })
  empImage: string;
  @Column({ nullable: true })
  empSignature: string;
  @Column({ nullable: true })
  nationalId: number;
  @Column({ nullable: true })
  empType: number;
  @Column({ nullable: true })
  leaveApplicableStatus: boolean;
  @Column({ nullable: true })
  dateOfBirts: string;
  @Column({ nullable: true })
  genderId: number;
  @Column({ nullable: true })
  bloodGroupId: number;
  @Column({ nullable: true })
  maritialStatus: boolean;
  @Column({ nullable: true })
  spousName: string;
  @Column({ nullable: true })
  spouseProfe: number;
  @Column({ nullable: true })
  fatherOrHusbandName: string;
  @Column({ nullable: true })
  fatherOrHusbandProfe: number;
  @Column({ nullable: true })
  fatherOrHusbandMobile: string;
  @Column({ nullable: true })
  motherName: string;
  @Column({ nullable: true })
  motherProfe: number;
  @Column({ nullable: true })
  motherMobile: string;
  @Column({ default: true, nullable: false }) 
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

  @ManyToOne(() => Department, (department) => department.employees, {
    nullable: true,
  })
  @JoinColumn({ name: "departmentId" })
  department: Department;
  @Column({ nullable: true })
  departmentId: number;

  @ManyToOne(() => Designation, (designation) => designation.employees, {
    nullable: true,
  })
  @JoinColumn({ name: "designationId" })
  designation: Designation;
  @Column({ nullable: true })
  designationId: number;

  @ManyToOne(() => Religion, (religion) => religion.employees, {
    nullable: true,
  })
  @JoinColumn({ name: "religionId" })
  religion: Religion;
  @Column({ nullable: true })
  religionId: number;

  @ManyToOne(() => BloodGroup, (bloodgroup) => bloodgroup.employees, {
    nullable: true,
  })
  @JoinColumn({ name: "bloodgroupId" })
  bloodgroup: BloodGroup;
  @Column({ nullable: true })
  bloodgroupId: number;
}
