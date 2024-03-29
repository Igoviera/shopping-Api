import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart } from 'src/Mongo/Schemas/cart.schema';
import { Product } from 'src/Mongo/Schemas/product.schema';
import { User } from 'src/Mongo/Schemas/user.schema';
import { CartDto } from '../cart/cart.dto';
import { UserDto } from './user.dto';
import { AuthDto } from 'src/auth/auth.Dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<User>,
        @InjectModel(Cart.name) private readonly cartModel: Model<Cart>,
    ) { }

    async createUser(user: UserDto) {
        try {
            const hashedPassword = await bcrypt.hash(user.password, 10);

            const cart = await this.cartModel.create({ product: [] });
            const newUser = await this.userModel.create({ ...user, password: hashedPassword, cart: cart._id });
            
            return newUser;
        } catch (error) {
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
        }).exec()
    }

    async userById(userId: string) {
        return await this.userModel.findById(userId).populate({
            path: 'cart',
            populate: {
                path: 'product',
                model: 'Product'
            }
        }).exec()
    }

    async findOne(user: AuthDto) {
       return await this.userModel.findOne({email: user.email})
    }
}
