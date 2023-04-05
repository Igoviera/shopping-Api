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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ProductDto } from './prodct.dto';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    createProduct(product: ProductDto): Promise<import("mongoose").Document<unknown, {}, import("../../Mongo/Schemas/product.schema").Product> & Omit<import("../../Mongo/Schemas/product.schema").Product & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    productById(productId: string): Promise<import("mongoose").Document<unknown, {}, import("../../Mongo/Schemas/product.schema").Product> & Omit<import("../../Mongo/Schemas/product.schema").Product & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findProductCategory(category: string): Promise<(import("mongoose").Document<unknown, {}, import("../../Mongo/Schemas/product.schema").Product> & Omit<import("../../Mongo/Schemas/product.schema").Product & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    productAll(name?: string): Promise<(import("mongoose").Document<unknown, {}, import("../../Mongo/Schemas/product.schema").Product> & Omit<import("../../Mongo/Schemas/product.schema").Product & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
}
