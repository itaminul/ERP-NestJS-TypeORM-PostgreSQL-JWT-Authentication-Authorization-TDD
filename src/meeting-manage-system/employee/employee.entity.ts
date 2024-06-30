
import { Department } from "src/global-setup/department/department.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";


@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  salary: number;
  @Column()
  firstName: string;
  @Column()
  middleName: string;
  @Column()
  lastName: string;
  @Column()
  fullName: string;
  @Column()
  phone: string;
  @Column()
  mobileOne: string;
  @Column()
  mobileTwo: string;
  @Column()
  emergencyMobile: string;
  @Column()
  officeEmail: string;
  @Column()
  personalEmail: string;
  @Column()
  empImage: string;
  @Column()
  empSignature: string;
  @Column()
  nationalId: number;

  @OneToOne(() => Department)
  @JoinColumn()
  department: Department;
}
