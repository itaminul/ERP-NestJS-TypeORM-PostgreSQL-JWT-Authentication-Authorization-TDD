import { Department } from 'src/global-setup/department/department.entity';
import { Employee } from 'src/meeting-manage-system/employee/employee.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'erpdb',
  password: '123456',
  database: 'erp_db1',
  entities: [Department, Employee],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});

// npm run typeorm -- migration:generate -d ./dist/data-source.js ./src/migrations/CreateEmployeeAndDepartmentTables
// npm run typeorm -- migration:run -d ./data-source.ts