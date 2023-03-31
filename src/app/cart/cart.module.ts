import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cart, CartSchema } from 'src/Mongo/Schemas/cart.schema';
import { Product, ProductSchema } from 'src/Mongo/Schemas/product.schema';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Cart.name, schema: CartSchema },
      { name: Product.name, schema: ProductSchema },
    ]),
  ],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
