import {
    IsDateString,
    IsNotEmpty,
    IsOptional,
    Validate,
    type ValidationArguments,
    type ValidationOptions,
    ValidatorConstraint,
    type ValidatorConstraintInterface,
    registerDecorator,
} from 'class-validator';

enum MovieGenre {
    Action = 'action',
    Fantasy = 'fantasy',
}

export class UpdateMovieDto {
    @IsNotEmpty() // 값이 있을 때 빈 문자열이면 안 된다
    @IsOptional() // 값이 선택적
    title?: string;

    @IsNotEmpty()
    @IsOptional()
    genre?: string;
}
