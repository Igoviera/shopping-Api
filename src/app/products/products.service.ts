import { BadRequestException, Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/Mongo/Schemas/product.schema';
import { ProductDto } from './prodct.dto';
import { Comment } from 'src/Mongo/Schemas/comment.schema';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product.name) private readonly productModel: Model<Product>,
        @InjectModel(Comment.name) private readonly commentModel: Model<Comment>
    ) { }

    async createProduct(product: ProductDto) {
        try {
            const createProduct = new this.productModel(product);
            return await createProduct.save();
        } catch (error) {
            console.error(error);
            throw new Error("Não foi possível salvar o produto");
        }
    };

    async productAll(name?: string) {
        let query = {}

        if (name) {
            const regex = new RegExp(name, 'i')
            query = { name: regex }
        }
        const productAll = await this.productModel.find(query).exec()

        if (!productAll) {
            throw new BadRequestException('Produtos não encontrados')
        }
        return productAll
    };

    async findProductCategory(category: string) {
        const productCategory = await this.productModel.find({ departamento: category }).exec()

        if (!productCategory) {
            throw new NotAcceptableException('Produtos não encontrados')
        }
        return productCategory
    }

    async productById(productById: string) {
        try {
            const productByIdExtist = await this.productModel.findById(productById).populate({
                path: 'comments',
                populate: {
                    path: 'user',
                    select: 'name email'
                }
            }).exec()

            if (!productByIdExtist) {
                throw new BadRequestException('Produto não encontrado')
            }
            return productByIdExtist
        } catch (error) {
            console.error(error);
            throw new Error('Não foi possível buscar o produto pelo ID');
        }
    }
}
