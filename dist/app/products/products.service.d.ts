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
import { Product } from 'src/Mongo/Schemas/product.schema';
import { ProductDto } from './prodct.dto';
import { Comment } from 'src/Mongo/Schemas/comment.schema';
export declare class ProductsService {
    private readonly productModel;
    private readonly commentModel;
    constructor(productModel: Model<Product>, commentModel: Model<Comment>);
    createProduct(product: ProductDto): Promise<import("mongoose").Document<unknown, {}, Product> & Omit<Product & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    productAll(name?: string): Promise<(import("mongoose").Document<unknown, {}, Product> & Omit<Product & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    findProductCategory(category: string): Promise<(import("mongoose").Document<unknown, {}, Product> & Omit<Product & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    productById(productById: string): Promise<import("mongoose").Document<unknown, {}, Product> & Omit<Product & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
}
