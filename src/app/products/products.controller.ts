import { Body, Controller, Post, Get, Param, UseGuards } from '@nestjs/common';
import { UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import { ProductDto } from './prodct.dto';
import { ProductsService } from './products.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('products')
@ApiTags('Produtos')
export class ProductsController {
    constructor(private readonly productService: ProductsService) { }

    @Post()
    @ApiOperation({ summary: 'Cadastrar um produto' })
    @ApiResponse({ status: 201, description: 'Produto cadastrado com sucesso' })
    async createProduct(@Body() product: ProductDto) {
        return await this.productService.createProduct(product)
    }

    @Get('id/:productId')
    @ApiOperation({ summary: 'Listar um produto pelo ID' })
    @ApiResponse({ status: 200, description: 'Produto retornado com sucesso' })
    @ApiResponse({ status: 409, description: 'Produto não encontrado' })
    async productById(@Param('productId') productId: string) {
        return await this.productService.productById(productId)
    }

    @Get('departamento/:category')
    @ApiOperation({summary: 'Listar produto por departamento'})
    @ApiResponse({ status: 200, description: 'Produto retornado com sucesso'})
    @ApiResponse({ status: 409, description: 'Produto não encontrado' })
    async findProductCategory(@Param('category') category: string) {
        return await this.productService.findProductCategory(category)
    }

    @Get(':name?')
    @UsePipes(new ValidationPipe())
    @ApiOperation({ summary: 'Listar todos os produtos ou pesquisar um produto pelo nome' })
    @ApiResponse({ status: 200, description: 'Produtos retornado com sucesso' })
    @ApiResponse({ status: 409, description: 'Produto não encontrado' })
    async productAll(@Param('name') name?: string) {
        return await this.productService.productAll(name)
    }

}
