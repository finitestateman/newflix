import { Injectable, NotFoundException } from '@nestjs/common';

export interface Movie {
    id: number;
    title: string;
    genre: string;
}

@Injectable()
export class MovieService {
    private movies: Movie[] = [
        {
            id: 1,
            title: "Harry Potter and the Philosopher's Stone",
            genre: 'fantasy',
        },
        {
            id: 2,
            title: 'The Lord of the Rings: The Fellowship of the Ring',
            genre: 'action',
        },
        {
            id: 3,
            title: 'The Dark Knight',
            genre: 'hero',
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

    createMovie(title: string, genre: string) {
        const movie: Movie = {
            id: this.idCoutner++,
            title,
            genre,
        };

        this.movies.push(movie);

        return movie;
    }

    updateMovie(id: number, title: string, genre: string) {
        const movie = this.movies.find((m) => m.id === +id);

        if (!movie) {
            throw new NotFoundException('존재하지 않는 ID의 영화입니다!');
        }

        Object.assign(movie, { title, genre });

        return movie;
    }

    deleteMovie(id: number) {
        const movieIndex = this.movies.findIndex((m) => m.id === +id);

        if (movieIndex === -1) {
            throw new NotFoundException('존재하지 않는 ID의 영화입니다!');
        }

        this.movies.splice(movieIndex, 1);

        return id;
    }
}
