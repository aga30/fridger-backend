"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewMigrationSomehting11688035471693 = void 0;
class NewMigrationSomehting11688035471693 {
    constructor() {
        this.name = 'NewMigrationSomehting11688035471693';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "temporary_user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "somehting" varchar NOT NULL, "new" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_user"("id", "name", "somehting", "new") SELECT "id", "name", "somehting", 'seeded value' FROM "user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "somehting" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "user"("id", "name", "somehting") SELECT "id", "name", "somehting" FROM "temporary_user"`);
        await queryRunner.query(`DROP TABLE "temporary_user"`);
    }
}
exports.NewMigrationSomehting11688035471693 = NewMigrationSomehting11688035471693;
//# sourceMappingURL=1688035471693-NewMigrationSomehting1.js.map