import { Injectable, NotFoundException } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart } from 'src/Mongo/Schemas/cart.schema';
import { Product } from 'src/Mongo/Schemas/product.schema';
import { CartDto } from './cart.dto';

@Injectable()
export class CartService {
    constructor(
        @InjectModel(Cart.name) private readonly cartModelo: Model<Cart>,
        @InjectModel(Product.name) private readonly productModelo: Model<Product>
    ) { }

    async addProductCart(cartId: string, productId: string): Promise<Cart> {
        const cart = await this.cartModelo.findById(cartId).populate('product');
      
        if (!cart) {
          throw new NotFoundException('Carrinho não encontrado!');
        }
      
        const product = await this.productModelo.findById(productId);
      
        if (!product) {
          throw new NotFoundException(`Produto com o ID ${productId} não encontrado!`);
        }

    
      
        cart.product.push(product);
      
        // Atualiza o valor de 'total' manualmente somando os preços de todos os produtos do carrinho
        const total = cart.product.reduce((acc, product) => acc + product.price, 0);
        cart.valorTotal = total;
      
        await cart.save();
      
        return cart;
      }

    async allProductCart() {
    const productExiste = await this.cartModelo.find({}).populate('product','name description price').exec()

    if (!productExiste) {
        throw new BadRequestException('Carrinho esta vazio')
    }

    return productExiste
}

    async productById(cardId: string) {
    const productExiste = await this.cartModelo.findById(cardId).populate('product')

    if (!productExiste) {
        throw new BadRequestException('Produto não encontrado')
    }

    return productExiste
}

    async deleteProductCart(cartId: string, productId: Product) {
    const cart = await this.cartModelo.findById(cartId);

    if (!cart) {
        throw new NotFoundException('Carrinho não encontrado!');
    }

    const productIndex = cart.product.indexOf(productId);

    if (productIndex >= 0) {
        const product = await this.productModelo.findById(productId);

        if (!product) {
            throw new NotFoundException(`Produto com o ID ${productId} não encontrado!`);
        }

        cart.valorTotal -= product.price;
        cart.product.splice(productIndex, 1);

        await cart.save();
        return cart;
    } else {
        throw new NotFoundException('Produto não encontrado no carrinho!');
    }
}
}
