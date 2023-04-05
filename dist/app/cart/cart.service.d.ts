/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { Cart } from 'src/Mongo/Schemas/cart.schema';
import { Product } from 'src/Mongo/Schemas/product.schema';
export declare class CartService {
    private readonly cartModelo;
    private readonly productModelo;
    constructor(cartModelo: Model<Cart>, productModelo: Model<Product>);
    addProductCart(cartId: string, productId: string): Promise<Cart>;
    allProductCart(): Promise<Omit<import("mongoose").Document<unknown, {}, Cart> & Omit<Cart & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, never>[]>;
    productById(cardId: string): Promise<import("mongoose").Document<unknown, {}, Cart> & Omit<Cart & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    deleteProductCart(cartId: string, productId: Product): Promise<import("mongoose").Document<unknown, {}, Cart> & Omit<Cart & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
}
