import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class ProductDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(500)
    description: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    // @IsNotEmpty()
    // @IsString()
    img: string;
}