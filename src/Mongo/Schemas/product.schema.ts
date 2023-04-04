import { HydratedDocument,} from "mongoose";
import { Prop, SchemaFactory, Schema} from '@nestjs/mongoose';
import { IsNotEmpty } from "class-validator";

export type ProductSchema = HydratedDocument<Product>

@Schema()
export class Product {
    @Prop()
    // @IsNotEmpty({ message: 'O nome do produto é obrigatório' })
    name: String

    @Prop()
    // @IsNotEmpty({ message: 'A descrição do produto é obrigatória' })
    description: String

    @Prop()
    // @IsNotEmpty({ message: 'O preço do produto é obrigatório' })
    price: number

    @Prop()
    // @IsNotEmpty({message: 'O departamento do produto é obrigatório'})
    departamento: string

    @Prop()
    quantity: Number

    @Prop()
    img: String
}

export const ProductSchema = SchemaFactory.createForClass(Product)