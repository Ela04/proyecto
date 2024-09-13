import { Test, TestingModule } from '@nestjs/testing';
import { FiestasController } from './fiestas.controller';
import { FiestasService } from './fiestas.service';

describe('FiestasController', () => {
  let controller: FiestasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FiestasController],
      providers: [FiestasService],
    }).compile();

    controller = module.get<FiestasController>(FiestasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
