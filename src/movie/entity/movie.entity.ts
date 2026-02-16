import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    VersionColumn,
} from 'typeorm';

export class BaseEntity {
    @CreateDateColumn()
    declare createdAt: Date;

    @UpdateDateColumn()
    declare updatedAt: Date;

    @VersionColumn()
    declare version: number;
}

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    declare id: number;

    @Column()
    declare title: string;

    @Column()
    declare genre: string;

    @Column(() => BaseEntity)
    declare base: BaseEntity;
}
