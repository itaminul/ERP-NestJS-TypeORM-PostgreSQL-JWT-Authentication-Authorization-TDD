import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

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
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;
  @UpdateDateColumn({ type: 'timestamptz' })
  updatedDate: string;
  @Column()
  updatedTime: string;
  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;
  @Column()
  updatedBy: number;
}
