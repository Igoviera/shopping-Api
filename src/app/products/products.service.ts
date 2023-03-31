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

    async productAll(){
        const productAll = await this.productModel.find().exec()
        
        if(!productAll){
            throw new BadRequestException('Produtos não encontrados')
        }
        return productAll
    }
}
