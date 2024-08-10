import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class RoutePermission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  route: string;

  @Column()
  method: string;

  @Column()
  roles: string;  // Store roles as a comma-separated string
}
