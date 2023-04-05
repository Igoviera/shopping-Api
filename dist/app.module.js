"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const product_schema_1 = require("./Mongo/Schemas/product.schema");
const products_service_1 = require("./app/products/products.service");
const products_controller_1 = require("./app/products/products.controller");
const products_module_1 = require("./app/products/products.module");
const cart_module_1 = require("./app/cart/cart.module");
const cart_controller_1 = require("./app/cart/cart.controller");
const cart_service_1 = require("./app/cart/cart.service");
const cart_schema_1 = require("./Mongo/Schemas/cart.schema");
const user_module_1 = require("./app/user/user.module");
const user_schema_1 = require("./Mongo/Schemas/user.schema");
const user_controller_1 = require("./app/user/user.controller");
const user_service_1 = require("./app/user/user.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRoot(process.env.DATABASE_URL),
            mongoose_1.MongooseModule.forFeature([
                { name: product_schema_1.Product.name, schema: product_schema_1.ProductSchema },
                { name: cart_schema_1.Cart.name, schema: cart_schema_1.CartSchema },
                { name: user_schema_1.User.name, schema: user_schema_1.UserSchema }
            ]),
            user_module_1.UserModule,
            products_module_1.ProductsModule,
            cart_module_1.CartModule,
        ],
        controllers: [products_controller_1.ProductsController, cart_controller_1.CartController, user_controller_1.UserController],
        providers: [products_service_1.ProductsService, cart_service_1.CartService, user_service_1.UserService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map