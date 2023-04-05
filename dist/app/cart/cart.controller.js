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
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/swagger/dist/decorators");
const product_schema_1 = require("../../Mongo/Schemas/product.schema");
const cart_service_1 = require("./cart.service");
let CartController = class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }
    async addProductCart(cartId, body) {
        const { productId } = body;
        return await this.cartService.addProductCart(cartId, productId);
    }
    async allProductCart() {
        return await this.cartService.allProductCart();
    }
    async productById(cartId) {
        return await this.cartService.productById(cartId);
    }
    async deleteProductCart(cartId, productId) {
        return await this.cartService.deleteProductCart(cartId, productId);
    }
};
__decorate([
    (0, common_1.Post)(':cartId'),
    (0, decorators_1.ApiOperation)({ summary: 'Adicionar produto ao carrinho' }),
    (0, decorators_1.ApiResponse)({ status: 200, description: 'Produto adicionado com sucesso' }),
    __param(0, (0, common_1.Param)('cartId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "addProductCart", null);
__decorate([
    (0, common_1.Get)(),
    (0, decorators_1.ApiOperation)({ summary: 'Listar todos os carrinhos' }),
    (0, decorators_1.ApiResponse)({ status: 200, description: 'Carro retornado com sucesso' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CartController.prototype, "allProductCart", null);
__decorate([
    (0, common_1.Get)(':cardId'),
    (0, decorators_1.ApiOperation)({ summary: 'Listar um carrinho pelo ID' }),
    (0, decorators_1.ApiResponse)({ status: 200, description: 'Carrinho retornado com sucesso' }),
    (0, decorators_1.ApiResponse)({ status: 409, description: 'Carroinho não encontrado' }),
    __param(0, (0, common_1.Param)('cardId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "productById", null);
__decorate([
    (0, common_1.Delete)(':cartId/produtos/:productId'),
    (0, decorators_1.ApiOperation)({ summary: 'Deletar um produto do carrinho' }),
    (0, decorators_1.ApiResponse)({ status: 204, description: 'Produto deletado com sucesso' }),
    (0, decorators_1.ApiResponse)({ status: 409, description: 'Produto não encontrado' }),
    __param(0, (0, common_1.Param)('cartId')),
    __param(1, (0, common_1.Param)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, product_schema_1.Product]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "deleteProductCart", null);
CartController = __decorate([
    (0, common_1.Controller)('cart'),
    (0, decorators_1.ApiTags)('Carrinho'),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
exports.CartController = CartController;
//# sourceMappingURL=cart.controller.js.map