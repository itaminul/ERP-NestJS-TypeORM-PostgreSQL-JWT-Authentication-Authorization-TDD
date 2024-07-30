import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RouteRole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  route: string;

  @Column()
  rolename: string;
}
