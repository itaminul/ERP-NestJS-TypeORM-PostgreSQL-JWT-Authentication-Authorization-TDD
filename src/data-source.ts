import { DataSource, DataSourceOptions } from "typeorm";
import { Department } from "./entities/department.entity";
import { Employee } from "./entities/employee.entity";
import { Designation } from "./entities/designation.entity";
import { Religion } from "./entities/religion.entity";
import { BloodGroup } from "./entities/bloodgroup.entity";
import { Client } from "./entities/client.entity";
import { User } from "./entities/user.entity";
import { Role } from "./entities/role.entity";
import { EmployeeType } from "./entities/employeeType.entity";
import { DivisionEntity } from "./entities/division.entity";
import { DistrictEntity } from "./entities/district.entity";
export const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  name: "pm_main",
  host: "localhost",
  port: 5432,
  username: "erpdb",
  password: "123456",
  database: "erp_db1",
  entities: [
    Department,
    Employee,
    Designation,
    Religion,
    BloodGroup,
    Client,
    EmployeeType,
    DivisionEntity,
    DistrictEntity,
    User,
    Role,
  ],
  migrations: ["dist/migrations/*.js"],
};
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
// "migration:generate": "npm run build && npm run typeorm -- migration:generate -d ./dist/data-source.js src/migrations/AutoGeneratedMigration",
// npm run typeorm -- migration:generate -d ./dist/data-source.js ./src/migrations/CreateEmployeeAndDepartmentTables
// npm run typeorm -- migration:generate -d ./dist/data-source.js ./src/migrations/CreateEmployeeAndDepartmentTables
// npm run typeorm -- migration:run -d ./data-source.ts
// npm run migration:generate
// npm run migration:run
