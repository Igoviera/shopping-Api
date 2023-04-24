import mongoose, { HydratedDocument } from "mongoose";
import { Comment } from "./comment.schema";
export type ProductSchema = HydratedDocument<Product>;
export declare class Product {
    name: String;
    description: String;
    price: number;
    departamento: string;
    quantity: Number;
    img: String;
    comments: Comment[];
}
export declare const ProductSchema: mongoose.Schema<Product, mongoose.Model<Product, any, any, any, mongoose.Document<unknown, any, Product> & Omit<Product & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Product, mongoose.Document<unknown, {}, mongoose.FlatRecord<Product>> & Omit<mongoose.FlatRecord<Product> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
