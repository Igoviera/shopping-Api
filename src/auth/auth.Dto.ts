import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class AuthDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(255)
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(255)
    password: string;
}