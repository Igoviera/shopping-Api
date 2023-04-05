import mongoose, { HydratedDocument } from "mongoose";
import { Product } from "./product.schema";
export type CartSchema = HydratedDocument<Cart>;
export declare class Cart {
    product: Product[];
    valorTotal: number;
}
export declare const CartSchema: mongoose.Schema<Cart, mongoose.Model<Cart, any, any, any, mongoose.Document<unknown, any, Cart> & Omit<Cart & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Cart, mongoose.Document<unknown, {}, mongoose.FlatRecord<Cart>> & Omit<mongoose.FlatRecord<Cart> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
