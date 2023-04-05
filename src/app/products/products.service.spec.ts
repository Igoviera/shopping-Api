import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let productService: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService],
    }).compile();

    productService = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(productService).toBeDefined();
  });

  describe('productAll', () => {
    it('Espero retornar uma lista de produtos', async () => {
      
    })
  })
});
