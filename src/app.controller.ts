import {
    Controller,
    Delete,
    Get,
    Inject,
    NotFoundException,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
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
    getMovie(@Param('id') id: string) {
        const movie = this.movies.find((m) => m.id === +id);

        if (!movie) {
            throw new NotFoundException('존재하지 않는 ID의 영화입니다!');
        }

        return movie;
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
