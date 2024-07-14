import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Role } from "./role.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  orgId: number;

  @Column({ default: true })
  activeStatus: boolean;
  @Column()
  deptId: number;
  
  @Column()
  desigId: number;

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];
}
