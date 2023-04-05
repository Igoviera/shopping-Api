import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './Mongo/Schemas/product.schema';
import { ProductsService } from './app/products/products.service';
import { ProductsController } from './app/products/products.controller';
import { ProductsModule } from './app/products/products.module';
import { CartModule } from './app/cart/cart.module';
import { CartController } from './app/cart/cart.controller';
import { CartService } from './app/cart/cart.service';
import { Cart, CartSchema } from './Mongo/Schemas/cart.schema';
import { UserModule } from './app/user/user.module';
import { User, UserSchema } from './Mongo/Schemas/user.schema';
import { UserController } from './app/user/user.controller';
import { UserService } from './app/user/user.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    MongooseModule.forFeature([
      {name:Product.name, schema: ProductSchema},
      {name:Cart.name, schema: CartSchema},
      {name:User.name, schema: UserSchema}
    ]),
    UserModule,
    ProductsModule,
    CartModule,
   

  ],
  controllers: [ProductsController, CartController, UserController],
  providers: [ProductsService, CartService, UserService],
})
export class AppModule {}
