import { Controller, Delete, Get, Inject, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

interface Movie {
    id: number;
    title: string;
}

@Controller('movie')
export class AppController {
    private movies: Movie[] = [
        {
            id: 1,
            title: "Harry Potter and the Philosopher's Stone",
        },
        {
            id: 2,
            title: 'The Lord of the Rings: The Fellowship of the Ring',
        },
    ];

    constructor(@Inject(AppService) private readonly appService: AppService) {}

    @Get()
    getMovies() {
        return this.movies;
    }

    @Get(':id')
    getMovie() {
        return {
            id: 1,
            title: "Harry Potter and the Philosopher's Stone",
            character: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
        };
    }

    @Post()
    postMovie() {
        return {
            id: 3,
            title: 'Avengers: Endgame',
        };
    }

    @Patch(':id')
    patchMovie() {
        return {
            id: 1,
            title: 'Harry Potter and the Chamber of Secrets',
        };
    }

    @Delete(':id')
    deleteMovie() {
        return 3;
    }
}
