import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { ProductDto } from './prodct.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService){}

    @Post()
    async createProduct(@Body() product: ProductDto){
        return  await this.productService.createProduct(product)
    }

    @Get()
    async productAll(){
        return await this.productService.productAll()
    }
}
