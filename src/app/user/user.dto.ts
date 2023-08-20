import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class UserDto {
    @IsNotEmpty({ message: 'O nome do usuário é obrigatório' })
    @IsString({message:'O nome não pode conter numeros'})
    @MinLength(3, {message:'O nome deve ser maior ou igual a 3 caracteres'})
    @MaxLength(100, {message:'O nome deve ser menor ou igual a 100 caracteres'})
    name: string;

    @IsNotEmpty({message:'O e-mail é obrigatório'})
    @MaxLength(255, {message:'O e-mail deve ser menor ou igual a 255 caracteres'})
    email: string;

    @IsNotEmpty({message:'A senha é obrigatória'})
    @MinLength(4,{message:'A senha deve ser maior ou igual a 4 caracteres'})
    @MaxLength(255,{message:'A senha deve ser menor ou igual a 8 caracteres'})
    password: string;
}