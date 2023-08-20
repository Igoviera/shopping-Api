import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class ProductDto {
    @IsNotEmpty({message:'O nome do produto é obrigatório'})
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    name: string;

    @IsNotEmpty({message:'A descrição do produto é obrigatória'})
    @IsString()
    @MinLength(2)
    @MaxLength(500)
    description: string;

    @IsNotEmpty({message:'O preço do produto é obrigatório'})
    @IsNumber()
    price: number;

    @IsNotEmpty({message:'O departamento do produto é obrigatório'})
    @IsString()
    @MaxLength(100)
    departamento: string;

    // @IsNotEmpty()
    // @IsString()
    img: string;

    @IsNotEmpty({message:'A quantidade em estoque é obrigatória'})
    @IsNumber()    
    stock: Number;

    @IsNotEmpty({message:'A marca do produto é obrigatória'})
    @IsString()
    @MaxLength(255)
    @MinLength(2)
    brand: string;

    @MinLength(2)
    @MaxLength(20)
    color: string;

    @IsNotEmpty({message:'A disponibilidade do produto é obrigatória'})
    availability: boolean;

}