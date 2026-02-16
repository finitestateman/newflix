import { CreateDateColumn, UpdateDateColumn, VersionColumn } from 'typeorm';

export class BaseTable {
    @CreateDateColumn()
    declare createdAt: Date;

    @UpdateDateColumn()
    declare updatedAt: Date;

    @VersionColumn()
    declare version: number;
}
