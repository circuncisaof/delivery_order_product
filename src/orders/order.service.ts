import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { FilterOrderDto } from './dtos/fileter-order.dto';
import { OrderDto } from './dtos/order.dto';
import { PartialUpdate } from './dtos/partial-update.order';
import { UpdateOrder } from './dtos/update.order.dto';
import { OrderEntity } from './entities/order.entity';
import { Status_Order } from './enums/order.enum';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private order_repo: Repository<OrderEntity>,
  ) {}
  async create_order(data: OrderDto) {
    data.order_number = await this.order_number();
    const new_data = await this.order_repo.create(data);
    return this.order_repo.save(new_data);
  }

  async orders() {
    return this.order_repo.find();
  }

  async orders_deliveries() {
    return this.order_repo.find({
      where: { delivery_date: },
      order: { createdAt: 'ASC' },
    });
  }

  async filter(filterTOrder: FilterOrderDto): Promise<FilterOrderDto[]> {
    try {
      const {
        sender,
        shipping_type,
        weight,
        width,
        createdAt,
        order_cancellation,
        order_number,
        recipient,
      } = filterTOrder;
      const conditions:
        | FindOptionsWhere<FilterOrderDto>
        | FindOptionsWhere<FilterOrderDto>[] = {
        ...(sender ? { sender } : {}),
        ...(shipping_type ? { shipping_type } : {}),
        ...(weight ? { weight } : {}),
        ...(createdAt ? { createdAt } : {}),
        ...(order_cancellation ? { order_cancellation } : {}),
        ...(width ? { width } : {}),
        ...(order_number ? { order_number } : {}),
        ...(recipient ? { recipient } : {}),
      };

      const data_re = await this.order_repo.find({
        where: conditions,
      });

      if (data_re.length === 0) throw new NotFoundException('Not found!');
      return data_re;
    } catch (error) {
      throw new BadRequestException(`Something wrong! ${error}`);
    }
  }

  async orders_loading_truck() {
    return this.order_repo.find({
      where: { status_order: Status_Order.loading_truck },
      order: { createdAt: 'ASC' },
    });
  }

  async orders_on_route() {
    return this.order_repo.find({
      where: { status_order: Status_Order.on_route },
      order: { createdAt: 'ASC' },
    });
  }
  async order_id(id: string) {
    return this.order_repo.findOne({
      where: { id },
    });
  }

  async update_order(id: string, data: UpdateOrder) {
    const order = await this.order_id(id);
    if (!order) {
      throw new BadRequestException('Order nor exist');
    }
    await this.order_repo.update(id, data);
    return await this.order_id(id);
  }
  async cancel_order(id: string, data: PartialUpdate) {
    const order = await this.order_id(id);
    if (!order) {
      throw new BadRequestException('Order nor exist');
    }
    await this.order_repo.update(id, data);
  }

  async order_number(): Promise<string> {
    const order = Math.random().toString(36).substring(0, 100);
    return order;
  }
}
