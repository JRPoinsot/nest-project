import { Test, TestingModule } from '@nestjs/testing';
import { SaleController } from './sale.controller';

describe('Sale Controller', () => {
  let controller: SaleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaleController],
    }).compile();

    controller = module.get<SaleController>(SaleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be return all sales', () => {
    expect(controller.findAll()).toEqual('All sales');
  });
});
