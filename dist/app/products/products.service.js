"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const product_schema_1 = require("../../Mongo/Schemas/product.schema");
const comment_schema_1 = require("../../Mongo/Schemas/comment.schema");
let ProductsService = class ProductsService {
    constructor(productModel, commentModel) {
        this.productModel = productModel;
        this.commentModel = commentModel;
    }
    async createProduct(product) {
        try {
            const createProduct = new this.productModel(product);
            return await createProduct.save();
        }
        catch (error) {
            console.error(error);
            throw new Error("Não foi possível salvar o produto");
        }
    }
    ;
    async productAll(name) {
        let query = {};
        if (name) {
            const regex = new RegExp(name, 'i');
            query = { name: regex };
        }
        const productAll = await this.productModel.find(query).exec();
        if (!productAll) {
            throw new common_1.BadRequestException('Produtos não encontrados');
        }
        return productAll;
    }
    ;
    async findProductCategory(category) {
        const productCategory = await this.productModel.find({ departamento: category }).exec();
        if (!productCategory) {
            throw new common_1.NotAcceptableException('Produtos não encontrados');
        }
        return productCategory;
    }
    async productById(productById) {
        try {
            const productByIdExtist = await this.productModel.findById(productById).populate({
                path: 'comments',
                populate: {
                    path: 'user',
                    select: 'name email'
                }
            }).exec();
            if (!productByIdExtist) {
                throw new common_1.BadRequestException('Produto não encontrado');
            }
            return productByIdExtist;
        }
        catch (error) {
            console.error(error);
            throw new Error('Não foi possível buscar o produto pelo ID');
        }
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_schema_1.Product.name)),
    __param(1, (0, mongoose_1.InjectModel)(comment_schema_1.Comment.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map