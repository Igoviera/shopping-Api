import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cart, CartSchema } from 'src/Mongo/Schemas/cart.schema';
import { Product, ProductSchema } from 'src/Mongo/Schemas/product.schema';
import { User, UserSchema } from 'src/Mongo/Schemas/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name:User.name, schema: UserSchema },
      { name: Cart.name, schema: CartSchema },
      { name: Product.name, schema: ProductSchema}
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
