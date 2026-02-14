import { Injectable, NotFoundException } from '@nestjs/common';

export interface Movie {
    id: number;
    title: string;
}

@Injectable()
export class AppService {
    private movies: Movie[] = [
        {
            id: 1,
            title: "Harry Potter and the Philosopher's Stone",
        },
        {
            id: 2,
            title: 'The Lord of the Rings: The Fellowship of the Ring',
        },
        {
            id: 3,
            title: 'The Dark Knight',
        },
    ];

    private idCoutner = 4;

    getManyMovies(title?: string) {
        if (!title) {
            return this.movies;
        }

        return this.movies.filter((m) => m.title.startsWith(title));
    }

    getMovieById(id: number) {
        const movie = this.movies.find((m) => m.id === id);

        if (!movie) {
            throw new NotFoundException('존재하지 않는 ID의 영화입니다!');
        }

        return movie;
    }

    createMovie(title: string) {
        const movie: Movie = {
            id: this.idCoutner++,
            title,
        };

        this.movies.push(movie);

        return movie;
    }
}
