import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist/decorators';
import { Cart } from 'src/Mongo/Schemas/cart.schema';
import { Product } from 'src/Mongo/Schemas/product.schema';
import { CartDto } from './cart.dto';
import { CartService } from './cart.service';

@Controller('cart')
@ApiTags('Carrinho')
export class CartController {
    constructor(private readonly cartService: CartService) { }

    @Post(':cartId')
    @ApiOperation({ summary: 'Adicionar produto ao carrinho' })
    @ApiResponse({ status: 200, description: 'Produto adicionado com sucesso' })
    async addProductCart(@Param('cartId') cartId: string, @Body() body: { productId: string }) {
        const { productId } = body;
        return await this.cartService.addProductCart(cartId, productId);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os carrinhos' })
    @ApiResponse({ status: 200, description: 'Carro retornado com sucesso' })
    async allProductCart() {
        return await this.cartService.allProductCart()
    }

    @Get(':cardId')
    @ApiOperation({ summary: 'Listar um carrinho pelo ID' })
    @ApiResponse({ status: 200, description: 'Carrinho retornado com sucesso' })
    @ApiResponse({ status: 409, description: 'Carroinho não encontrado' })
    async productById(@Param('cardId') cartId: string) {
        return await this.cartService.productById(cartId)
    }

    @Delete(':cartId/produtos/:productId')
    @ApiOperation({ summary: 'Deletar um produto do carrinho' })
    @ApiResponse({ status: 204, description: 'Produto deletado com sucesso' })
    @ApiResponse({ status: 409, description: 'Produto não encontrado' })
    async deleteProductCart(
        @Param('cartId') cartId: string,
        @Param('productId') productId: Product,) {
        return await this.cartService.deleteProductCart(cartId, productId)
    }
}
