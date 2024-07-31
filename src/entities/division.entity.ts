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
export class DivisionEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  divisionName: string;
  @Column({ nullable: true })
  divisionDescription: string;
  @Column({ nullable: true })
  serialNo: number;
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

  @OneToMany(() => Employee, (employee) => employee.divisionId)
  employees: Employee[];
}
