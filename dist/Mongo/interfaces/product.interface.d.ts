import { Document } from 'mongoose';
export interface Product extends Document {
    name: String;
    description: String;
    price: Number;
    img: String;
}
