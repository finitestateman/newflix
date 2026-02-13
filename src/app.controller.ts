import { Controller, Delete, Get, Inject, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('movie')
export class AppController {
    constructor(@Inject(AppService) private readonly appService: AppService) {}

    @Get()
    getMovies() {
        return [
            {
                id: 1,
                name: "Harry Potter and the Philosopher's Stone",
                character: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
            },
            {
                id: 2,
                name: 'The Lord of the Rings: The Fellowship of the Ring',
                character: ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen'],
            },
        ];
    }

    @Get(':id')
    getMovie() {
        return {
            id: 1,
            name: "Harry Potter and the Philosopher's Stone",
            character: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
        };
    }

    @Post()
    postMovie() {
        return {
            id: 3,
            name: 'Avengers: Endgame',
            character: ['Robert Downey Jr.', 'Chris Evans', 'Chris Hemsworth'],
        };
    }

    @Patch(':id')
    patchMovie() {
        return {
            id: 1,
            name: 'Harry Potter and the Chamber of Secrets',
            character: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
        };
    }

    @Delete(':id')
    deleteMovie() {
        return 3;
    }
}
