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
export class Client {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  clientName: string;
  @Column({ nullable: true })
  clientDescription: string;

  @Column({ nullable: true })
  clientAddress: string;

  @Column({ nullable: true })
  clientPhone: string;
  @Column({ nullable: true })
  clientEmail: string;
  @Column({
    default: 1,
    comment: "Client type like home and abroad and 1 for home and 2 for aboard",
  })
  clientType: number;
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
  @OneToMany(() => Employee, (employee) => employee.bloodGroupId)
  employees: Employee[];
}
