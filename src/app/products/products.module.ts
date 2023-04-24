import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from 'src/Mongo/Schemas/product.schema';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Comment, CommentsSchema } from 'src/Mongo/Schemas/comment.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
          { name: Product.name, schema: ProductSchema },
          { name: Comment.name, schema: CommentsSchema }
        ]),
      ],
      controllers: [ProductsController],
      providers: [ProductsService],
})
export class ProductsModule {}
