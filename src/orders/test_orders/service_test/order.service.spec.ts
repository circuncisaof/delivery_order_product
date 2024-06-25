import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { OrderEntity } from 'src/orders/entities/order.entity';
import { OrderService } from 'src/orders/order.service';

describe('OrderService', () => {
  let order_service: OrderService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderService,
        {
          provide: getRepositoryToken(OrderEntity),
          useValue: {},
        },
      ],
    }).compile();

    order_service = module.get<OrderService>(OrderService);
  });

  test('Validate def', () => {
    expect(order_service).toBeDefined();
  });
});
