import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment } from 'src/Mongo/Schemas/comment.schema';
import { CommetDto } from './commet.dto';
import { Product } from 'src/Mongo/Schemas/product.schema';
import { User } from 'src/Mongo/Schemas/user.schema';

@Injectable()
export class CommetService {
    constructor(
        @InjectModel(Comment.name) private readonly commentModel: Model<Comment>,
        @InjectModel(Product.name) private readonly productModel: Model<Product>,
        @InjectModel(User.name) private readonly userModel: Model<User>
    ) { }

    async creatComment(producId: string, userId: string, comment: CommetDto) {
        try {
            const product = await this.productModel.findById(producId).populate('comments.user');
            const user = await this.userModel.findById(userId);
        
            if (!product) {
              throw new Error('Produto não encontrado')
            }
        
            if (!user) {
              throw new Error('Usuario não encontrado')
            }
        
            const newComment = new this.commentModel(comment);
            console.log("🚀 ~ file: commet.service.ts:31 ~ CommetService ~ creatComment ~ newComment:", newComment)

            newComment.user = user._id;
        
            product.comments.push(newComment);
            await product.save();
        
            user.comments.push(newComment);
            await user.save();
        
            return newComment;
        
          } catch (error) {
            throw error
          }
    }
}
