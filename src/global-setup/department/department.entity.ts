import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  salary: number;
  @Column()
  departmentName: string;
  @Column()
  departmentDescription: string;
  @Column()
  orgId: number;
  @Column()
  serialNo: number;
  @Column({ default: true })
  activeStatus: boolean;
  @Column()
  createdBy: number;
  @Column({ default: Date() })
  createdAt: Date;
  @Column()
  updatedDate: string;
  @Column()
  updatedTime: string;
  @Column()
  updatedAt: Date;
  @Column()
  updatedBy: number;
}
