import mongoose, { HydratedDocument } from "mongoose";
import { Cart } from "./cart.schema";
export type UserSchema = HydratedDocument<User>;
export declare class User {
    name: String;
    email: String;
    password: String;
    cart: Cart;
    comments: Comment[];
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, mongoose.Document<unknown, any, User> & Omit<User & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, mongoose.Document<unknown, {}, mongoose.FlatRecord<User>> & Omit<mongoose.FlatRecord<User> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
