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
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const pipes_1 = require("@nestjs/common/pipes");
const dist_1 = require("@nestjs/swagger/dist");
const prodct_dto_1 = require("./prodct.dto");
const products_service_1 = require("./products.service");
let ProductsController = class ProductsController {
    constructor(productService) {
        this.productService = productService;
    }
    async createProduct(product) {
        return await this.productService.createProduct(product);
    }
    async productById(productId) {
        return await this.productService.productById(productId);
    }
    async findProductCategory(category) {
        return await this.productService.findProductCategory(category);
    }
    async productAll(name) {
        return await this.productService.productAll(name);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, dist_1.ApiOperation)({ summary: 'Cadastrar um produto' }),
    (0, dist_1.ApiResponse)({ status: 200, description: 'Produto cadastrado com sucesso' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [prodct_dto_1.ProductDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Get)('id/:productId'),
    (0, dist_1.ApiOperation)({ summary: 'Listar um produto pelo ID' }),
    (0, dist_1.ApiResponse)({ status: 200, description: 'Produto retornado com sucesso' }),
    (0, dist_1.ApiResponse)({ status: 409, description: 'Produto não encontrado' }),
    __param(0, (0, common_1.Param)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "productById", null);
__decorate([
    (0, common_1.Get)('departamento/:category'),
    (0, dist_1.ApiOperation)({ summary: 'Listar produto por departamento' }),
    (0, dist_1.ApiResponse)({ status: 200, description: 'Produto retornado com sucesso' }),
    (0, dist_1.ApiResponse)({ status: 409, description: 'Produto não encontrado' }),
    __param(0, (0, common_1.Param)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findProductCategory", null);
__decorate([
    (0, common_1.Get)(':name?'),
    (0, decorators_1.UsePipes)(new pipes_1.ValidationPipe()),
    (0, dist_1.ApiOperation)({ summary: 'Listar todos os produtos ou pesquisar um produto pelo nome' }),
    (0, dist_1.ApiResponse)({ status: 200, description: 'Produtos retornado com sucesso' }),
    (0, dist_1.ApiResponse)({ status: 409, description: 'Produto não encontrado' }),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "productAll", null);
ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    (0, dist_1.ApiTags)('Produtos'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map