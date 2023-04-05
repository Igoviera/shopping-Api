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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("@nestjs/common/exceptions");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const cart_schema_1 = require("../../Mongo/Schemas/cart.schema");
const product_schema_1 = require("../../Mongo/Schemas/product.schema");
let CartService = class CartService {
    constructor(cartModelo, productModelo) {
        this.cartModelo = cartModelo;
        this.productModelo = productModelo;
    }
    async addProductCart(cartId, productId) {
        const cart = await this.cartModelo.findById(cartId).populate('product');
        if (!cart) {
            throw new common_1.NotFoundException('Carrinho não encontrado!');
        }
        const product = await this.productModelo.findById(productId);
        if (!product) {
            throw new common_1.NotFoundException(`Produto com o ID ${productId} não encontrado!`);
        }
        cart.product.push(product);
        const total = cart.product.reduce((acc, product) => acc + product.price, 0);
        cart.valorTotal = total;
        await cart.save();
        return cart;
    }
    async allProductCart() {
        const productExiste = await this.cartModelo.find({}).populate('product', 'name description price').exec();
        if (!productExiste) {
            throw new exceptions_1.BadRequestException('Carrinho esta vazio');
        }
        return productExiste;
    }
    async productById(cardId) {
        const productExiste = await this.cartModelo.findById(cardId).populate('product');
        if (!productExiste) {
            throw new exceptions_1.BadRequestException('Produto não encontrado');
        }
        return productExiste;
    }
    async deleteProductCart(cartId, productId) {
        try {
            const cart = await this.cartModelo.findById(cartId);
            if (!cart) {
                throw new common_1.NotFoundException('Carrinho não encontrado!');
            }
            const productIndex = cart.product.indexOf(productId);
            if (productIndex >= 0) {
                const product = await this.productModelo.findById(productId);
                if (!product) {
                    throw new common_1.NotFoundException(`Produto com o ID ${productId} não encontrado!`);
                }
                cart.valorTotal -= product.price;
                cart.product.splice(productIndex, 1);
                await cart.save();
                return cart;
            }
            else {
                throw new common_1.NotFoundException('Produto não encontrado no carrinho!');
            }
        }
        catch (error) {
            console.error(error);
            throw new Error('Não foi possível excluir o produto do carrinho');
        }
    }
};
CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(cart_schema_1.Cart.name)),
    __param(1, (0, mongoose_1.InjectModel)(product_schema_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map