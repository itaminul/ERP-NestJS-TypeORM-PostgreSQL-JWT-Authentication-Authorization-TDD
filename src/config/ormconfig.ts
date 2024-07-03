import { DataSourceOptions } from 'typeorm';
import { Employee } from '../entities/employee.entity';
import { Department } from '../entities/department.entity';

const config: DataSourceOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'erpdb',
  password: '123456',
  database: 'erp_db1',
  entities: [Employee, Department],
  migrations: ['dist/migrations/*.js'],
  synchronize: false,
};

export default config;
