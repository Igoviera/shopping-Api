import mongoose, { HydratedDocument,} from "mongoose";
import { Prop, SchemaFactory, Schema} from '@nestjs/mongoose';
import { Comment } from "./comment.schema";

export type ProductSchema = HydratedDocument<Product>

@Schema()
export class Product {
    @Prop()
    name: String

    @Prop()
    description: String

    @Prop()
    price: number

    @Prop()
    departamento: string

    @Prop()
    stock: Number

    @Prop()
    img: String[]

    @Prop()
    Assessments: Number

    @Prop()
    color: string

    @Prop()
    brand: string

    @Prop()
    peso: Number

    @Prop()
    availability: boolean

    @Prop({ default: Date.now })
    createdAt: Date

    @Prop({type:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]})
    comments: Comment[]
}

export const ProductSchema = SchemaFactory.createForClass(Product)