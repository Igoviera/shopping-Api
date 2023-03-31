import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { Cart } from 'src/Mongo/Schemas/cart.schema';
import { Product } from 'src/Mongo/Schemas/product.schema';
import { CartDto } from './cart.dto';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) { }

    @Post(':cartId')
    async addProductCart(@Param('cartId') cartId: string, @Body() body: { productId: string }) {
        const { productId } = body;
        return await this.cartService.addProductCart(cartId, productId);
    }

    @Get()
    async allProductCart() {
        return await this.cartService.allProductCart()
    }

    @Get(':cardId')
    async productById(@Param('cardId') cartId: string) {
        return await this.cartService.productById(cartId)
    }

    @Delete(':cartId/produtos/:productId')

    async deleteProductCart(
        @Param('cartId') cartId: string,
        @Param('productId') productId: Product,) {
        return await this.cartService.deleteProductCart(cartId, productId)
    }
}
