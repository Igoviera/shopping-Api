import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateCheckoutDto {
    cartId: string

    @IsNotEmpty({message:'O nome é obrigatório'})
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    name: string;

    @IsNotEmpty({message:'O e-mail é obrigatório'})
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    email: string;

    @IsNotEmpty({message:'O CEP é obrigatório'})
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    cep: string;

    @IsNotEmpty({message:'O endereço é obrigatório'})
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    adress: string;

    @IsNotEmpty({message:'A cidade é obrigatória'})
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    city: string;

    @IsNotEmpty({message:'A UF é obrigatória'})
    @IsString()
    @MinLength(2)
    @MaxLength(2)
    uf: string

    @IsNotEmpty({message:'O numero do cartão é obrigatório'})
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    numberCard: string

    @IsNotEmpty({message:'O nome do titular do cartão é obrigatório'})
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    nameCard: string

    @IsNotEmpty({message:'O CVV do cartão é obrigatório'})
    @IsString()
    @MinLength(3)
    @MaxLength(3)
    cvv: string

    @IsNotEmpty({message:'A data do cartão é obrigatória'})
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    date: string
}
