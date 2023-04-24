import { IsString, MaxLength, MinLength } from "class-validator";

export class CommetDto {
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    text: string;
}