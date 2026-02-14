import {
    IsDateString,
    IsNotEmpty,
    IsOptional,
    registerDecorator,
    Validate,
    ValidatorConstraint,
    type ValidationArguments,
    type ValidationOptions,
    type ValidatorConstraintInterface,
} from 'class-validator';

enum MovieGenre {
    Aaction = 'action',
    Fantasy = 'fantasy',
}

@ValidatorConstraint({
    async: true,
})
class PasswordValidator implements ValidatorConstraintInterface {
    validate(
        value: any,
        validationArguments?: ValidationArguments,
    ): Promise<boolean> | boolean {
        return value.length > 4 && value.length < 8;
    }
    defaultMessage?(validationArguments?: ValidationArguments): string {
        return '비밀번호의 길이는 4~8자 사이여야 합니다. 입력된 비밀번호: ($value)';
    }
}

function IsPasswordValid(validationOptions?: ValidationOptions) {
    // biome-ignore lint/complexity/noBannedTypes: <explanation>
    return (object: Object, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: PasswordValidator,
        });
    };
}

export class UpdateMovieDto {
    fun() {
        new PasswordValidator();
    }
    @IsNotEmpty() // 값이 있을 때 빈 문자열이면 안 된다
    @IsOptional() // 값이 선택적
    title?: string;

    @IsNotEmpty()
    @IsOptional()
    genre?: string;

    // @IsDefined() // null || undefined (비허용)
    // @IsOptional()
    // @Equals('code factory')
    // @NotEquals('code factory')
    // @IsEmpty() // null || undefined || '' 만 허용(' ' 비허용)
    // @IsNotEmpty() // IsDefined || ''
    // @IsIn(['action', 'fantasy'])
    // @IsNotIn(['romance'])
    // @IsBoolean()
    // @IsNumber()
    // @IsInt()
    // @IsArray()
    // @IsEnum(MovieGenre)
    // @IsDate() // 실제 날짜 객체여야 함
    // @IsDateString() // 날짜 형식의 문자열
    // @IsDivisibleBy(5)
    // @Max(100) // @Main(50)
    // @Contains('code factory')
    // @NotContains('code factory')
    // @IsAlphanumeric()
    // @IsCreditCard()
    // @IsHexColor()
    // @MaxLength(10)
    // @MinLength(5)
    // @IsUUID()
    // @IsLatLong()
    @IsPasswordValid({
        message: '다른메시지',
    })
    test?: string;
}
