import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { User } from "./user.schema";
import { Product } from "./product.schema";

export type CommentSchema = HydratedDocument<Comment>

@Schema()
export class Comment {
    @Prop()
    text: string

    @Prop({ default: Date.now })
    createdAt: Date

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
    product: Product
}

export const CommentsSchema = SchemaFactory.createForClass(Comment)