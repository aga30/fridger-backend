"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewMigration1688034576656 = void 0;
class NewMigration1688034576656 {
    constructor() {
        this.name = 'NewMigration1688034576656';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
exports.NewMigration1688034576656 = NewMigration1688034576656;
//# sourceMappingURL=1688034576656-NewMigration.js.map