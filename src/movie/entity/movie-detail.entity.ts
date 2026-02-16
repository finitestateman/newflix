import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Movie } from './movie.entity';

@Entity()
export class MovieDetail {
    @PrimaryGeneratedColumn()
    declare id: number;

    @Column()
    declare detail: string;

    @OneToOne(
        () => Movie,
        (movie) => movie.detail,
    )
    declare movie: Movie;
}
