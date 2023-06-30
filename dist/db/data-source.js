"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
const typeorm_1 = require("typeorm");
exports.dataSourceOptions = {
    type: 'sqlite',
    database: 'db.sqlite',
    entities: ['dist/src/**/*.entity.js'],
    synchronize: true,
    migrations: [
        'dist/db/migrations/*.js'
    ],
};
const dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map