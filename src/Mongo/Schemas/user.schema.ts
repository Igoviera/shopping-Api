import mongoose, { HydratedDocument,} from "mongoose";
import { Prop, SchemaFactory, Schema} from '@nestjs/mongoose';
import { Cart } from "./cart.schema";
import { IsNotEmpty } from "class-validator";

export type UserSchema = HydratedDocument<User>

@Schema()
export class User {
    @Prop({required:true})
    name: String

    @Prop({required:true})
    email: String

    @Prop({required:true})
    password: String

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Cart'}]})
    cart: Cart

    @Prop({type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]})
    comments: Comment[]
}

export const UserSchema = SchemaFactory.createForClass(User)