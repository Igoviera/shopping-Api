import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart } from 'src/Mongo/Schemas/cart.schema';
import { Product } from 'src/Mongo/Schemas/product.schema';
import { User } from 'src/Mongo/Schemas/user.schema';
import { CartDto } from '../cart/cart.dto';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<User>,
        @InjectModel(Cart.name) private readonly cartModel: Model<Cart>,
    ) { }

    async createUser(user: UserDto) { 
        const createCart = new this.cartModel({product: []})
        await createCart.save()
        const createUser = new this.userModel({...user, cart:createCart._id})
        await createUser.save()

        return createUser 
      
    }

    async allUser() {
        return await this.userModel.find({}).populate({
            path: 'cart',
            populate:{
                path:'product',
                model: 'Product'
            }
        }).exec()
    }

    async userById(userId: string) {
        return await this.userModel.findById(userId).populate({
            path: 'cart',
            populate:{
                path:'product',
                model: 'Product'
            }
        }).exec()
    }
}
