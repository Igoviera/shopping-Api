import { Module } from '@nestjs/common';
import { CommetController } from './commet.controller';
import { CommetService } from './commet.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/Mongo/Schemas/user.schema';
import { Product, ProductSchema } from 'src/Mongo/Schemas/product.schema';
import { Comment, CommentsSchema } from 'src/Mongo/Schemas/comment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Product.name, schema: ProductSchema },
      { name: Comment.name, schema: CommentsSchema }
    ]),
  ],
  controllers: [CommetController],
  providers: [CommetService]
})
export class CommetModule {}
