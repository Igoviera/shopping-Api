import mongoose, { HydratedDocument} from "mongoose";
import { Product } from "./product.schema";
import { Prop, SchemaFactory, Schema} from '@nestjs/mongoose';

export type CartSchema = HydratedDocument<Cart>

@Schema()
export class Cart {
    @Prop()
    valorTotal: number
    
    @Prop({type:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]})
    product: Product[]

    
}

export const CartSchema = SchemaFactory.createForClass(Cart)