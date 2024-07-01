import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true})
  salary: number;
  @Column({ nullable: false})
  departmentName: string;
  @Column()
  departmentDescription: string;
  @Column({ nullable: true})
  orgId: number;
  @Column({ nullable: true})
  serialNo: number;
  @Column({ default: true })
  activeStatus: boolean;
  @Column({ nullable: true})
  createdBy: number;
  @CreateDateColumn({ type: 'timestamptz', nullable: true })
  createdAt: Date;
  @UpdateDateColumn({ type: 'timestamptz', nullable: true })
  updatedDate: string;
  @Column({ nullable: true})
  updatedTime: string;
  @UpdateDateColumn({ type: 'timestamptz', nullable: true })
  updatedAt: Date;
  @Column({ nullable: true})
  updatedBy: number;
}
