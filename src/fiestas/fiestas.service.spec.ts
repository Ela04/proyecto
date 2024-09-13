import { Test, TestingModule } from '@nestjs/testing';
import { FiestasService } from './fiestas.service';

describe('FiestasService', () => {
  let service: FiestasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FiestasService],
    }).compile();

    service = module.get<FiestasService>(FiestasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
