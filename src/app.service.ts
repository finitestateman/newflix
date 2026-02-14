import { Injectable } from '@nestjs/common';

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

    private idCoutner = 3;

    getManyMovies(title?: string) {
        if (!title) {
            return this.movies;
        }

        return this.movies.filter((m) => m.title.startsWith(title));
    }
}
