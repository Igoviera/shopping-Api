import mongoose, { HydratedDocument,} from "mongoose";
import { Prop, SchemaFactory, Schema} from '@nestjs/mongoose';
import { Cart } from "./cart.schema";
import { IsNotEmpty } from "class-validator";

export type UserSchema = HydratedDocument<User>

@Schema()
export class User {
    @Prop({required:true})
    @IsNotEmpty({ message: 'O nome do usuario é obrigatório' })
    name: String

    @Prop({required:true})
    @IsNotEmpty({ message: 'O email do usuario é obrigatório' })
    email: String

    @Prop({required:true})
    @IsNotEmpty({ message: 'A senha do usuario é obrigatória' })
    password: String

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Cart'}]})
    cart: Cart
}

export const UserSchema = SchemaFactory.createForClass(User)