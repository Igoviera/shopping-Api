import mongoose, { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from "./user.schema";
import { Product } from "./product.schema";

export type CheckoutDocument = Document & Checkout;

@Schema()
export class Checkout {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    cep: string;

    @Prop({ required: true })
    adress: string;

    @Prop({ required: true })
    city: string;

    @Prop({ required: true })
    uf: string;

    @Prop({ required: true })
    n: string;

    @Prop({ required: true })
    numberCard: string;

    @Prop({ required: true })
    nameCard: string;

    @Prop({ required: true })
    cvv: string;

    @Prop({ required: true })
    date: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
    products: Product[];

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User
}

export const CheckoutSchema = SchemaFactory.createForClass(Checkout);
