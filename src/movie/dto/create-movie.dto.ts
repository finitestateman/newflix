import { IsNotEmpty } from 'class-validator';

export class CreateMovieDto {
    @IsNotEmpty()
    declare title: string;

    @IsNotEmpty()
    declare genre: string;

    @IsNotEmpty()
    declare detail: string;
}
