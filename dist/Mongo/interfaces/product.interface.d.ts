import { Document } from 'mongoose';
export interface Product extends Document {
    name: String;
    description: String;
    stock: Number;
    marca: String;
    brand: String;
    price: Number;
    img: String;
    peso: Number;
    assessments: Number;
    availability: Boolean;
}
