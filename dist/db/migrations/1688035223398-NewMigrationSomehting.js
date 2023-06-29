"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewMigrationSomehting1688035223398 = void 0;
class NewMigrationSomehting1688035223398 {
    constructor() {
        this.name = 'NewMigrationSomehting1688035223398';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "temporary_user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "somehting" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_user"("id", "name") SELECT "id", "name" FROM "user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "user"("id", "name") SELECT "id", "name" FROM "temporary_user"`);
        await queryRunner.query(`DROP TABLE "temporary_user"`);
    }
}
exports.NewMigrationSomehting1688035223398 = NewMigrationSomehting1688035223398;
//# sourceMappingURL=1688035223398-NewMigrationSomehting.js.map