import {
    ChildEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    TableInheritance,
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
@TableInheritance({
    column: { type: 'varchar', name: 'type' },
})
export class Content extends BaseEntity {
    @PrimaryGeneratedColumn()
    declare id: number;

    @Column()
    declare title: string;

    @Column()
    declare genre: string;
}

@ChildEntity()
export class Movie extends Content {
    @Column()
    declare runtime: number;
}

@ChildEntity()
export class Series extends Content {
    @Column()
    declare seriesCount: number;
}
