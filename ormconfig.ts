
import { DataSource } from 'typeorm';
import { Department } from './src/global-setup/department/department.entity';
import { Employee } from './src/meeting-manage-system/employee/employee.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: "erpdb",
  password: "123456",
  database: "erp_db1",
  entities: [Department, Employee],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});

