import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/Mongo/Schemas/product.schema';
import { ProductDto } from './prodct.dto';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private readonly productModel: Model<Product>){}

    async createProduct(product: ProductDto){
        const createProduct = new this.productModel(product)
        return await createProduct.save()
    };

    async productAll(name?: string){
        let query = {}

        if(name){
            const regex = new RegExp(name, 'i')
            query = {name: regex}
        }
        const productAll = await this.productModel.find(query).exec()
        
        if(!productAll){
            throw new BadRequestException('Produtos não encontrados')
        }
        return productAll
    };

    async findProductCategory(category: string){
        const productCategory = await this.productModel.find({departamento: category}).exec()

        if(!productCategory){
            throw new BadRequestException('Produtos não encontrados')
        }
        return productCategory
    }

    async productById(productById: string){
        const productByIdExtist =  await this.productModel.findById(productById).exec()

        if(!productByIdExtist){
            throw new BadRequestException('Produto não encontrado')
        }
        return productByIdExtist
    }
}
