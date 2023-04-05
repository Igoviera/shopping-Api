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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const cart_schema_1 = require("../../Mongo/Schemas/cart.schema");
const user_schema_1 = require("../../Mongo/Schemas/user.schema");
let UserService = class UserService {
    constructor(userModel, cartModel) {
        this.userModel = userModel;
        this.cartModel = cartModel;
    }
    async createUser(user) {
        try {
            const cart = await this.cartModel.create({ product: [] });
            const newUser = await this.userModel.create(Object.assign(Object.assign({}, user), { cart: cart._id }));
            return newUser;
        }
        catch (error) {
            console.error(error);
            throw new Error('Não foi possível criar o usuário');
        }
    }
    async allUser() {
        return await this.userModel.find({}).populate({
            path: 'cart',
            populate: {
                path: 'product',
                model: 'Product'
            }
        }).exec();
    }
    async userById(userId) {
        return await this.userModel.findById(userId).populate({
            path: 'cart',
            populate: {
                path: 'product',
                model: 'Product'
            }
        }).exec();
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(cart_schema_1.Cart.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map