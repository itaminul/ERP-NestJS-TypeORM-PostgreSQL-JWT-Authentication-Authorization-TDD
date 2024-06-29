import { Department } from 'src/global-setup/department/department.entity';
import { Employee } from 'src/meeting-manage-system/employee/employee.entity';
import { DataSource } from 'typeorm';
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: '192.168.0.221',
  port: 5432,
  username: 'ati_erp_test2',
  password: 'ati_erp_test2',
  database: 'ati_erp_test2',
  entities: [Employee, Department],
  migrations: ['dist/migrations/*.ts'],
  synchronize: false,
  extra: {
    options: '-c timezone=UTC',  // Set the time zone for the connection
  },
});
// npm run typeorm -- migration:generate -d ./data-source.ts ./src/migrations/CreateEmployeeAndDepartmentTables
//npm run typeorm -- migration:generate -d ./dist/data-source.js ./src/migrations/CreateEmployeeAndDepartmentTables
// npm run typeorm -- migration:run -d ./data-source.ts