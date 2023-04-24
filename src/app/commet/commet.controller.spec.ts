import { Test, TestingModule } from '@nestjs/testing';
import { CommetController } from './commet.controller';

describe('CommetController', () => {
  let controller: CommetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommetController],
    }).compile();

    controller = module.get<CommetController>(CommetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
