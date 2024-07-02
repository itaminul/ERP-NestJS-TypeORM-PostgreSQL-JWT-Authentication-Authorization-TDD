"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'erpdb',
    password: '123456',
    database: 'erp_db1',
    entities: ['src/**/**.entity{.ts,.js}'],
    subscribers: ['src/subscriber/**/*{.ts,.js}'],
    migrations: ['src/migrations/*.{ts,js}'],
    synchronize: false,
});
//# sourceMappingURL=data-source.js.map