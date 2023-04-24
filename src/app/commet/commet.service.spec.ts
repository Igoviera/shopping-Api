import { Test, TestingModule } from '@nestjs/testing';
import { CommetService } from './commet.service';

describe('CommetService', () => {
  let service: CommetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommetService],
    }).compile();

    service = module.get<CommetService>(CommetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
