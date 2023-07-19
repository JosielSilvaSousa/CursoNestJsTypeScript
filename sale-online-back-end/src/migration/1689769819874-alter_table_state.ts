import { MigrationInterface, QueryRunner } from "typeorm"

export class AlterTableState1689769819874 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        queryRunner.query(`
        alter table state
        add uf varchar(2)not null;
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        ALTER TABLE state
        drop uf;
        `)
    }

}
