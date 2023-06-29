import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigrationSomehting11688035471693 implements MigrationInterface {
    name = 'NewMigrationSomehting11688035471693'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "somehting" varchar NOT NULL, "new" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_user"("id", "name", "somehting", "new") SELECT "id", "name", "somehting", 'seeded value' FROM "user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "somehting" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "user"("id", "name", "somehting") SELECT "id", "name", "somehting" FROM "temporary_user"`);
        await queryRunner.query(`DROP TABLE "temporary_user"`);
    }

}
