import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { FilterOrderDto } from './dtos/fileter-order.dto';
import { OrderDto } from './dtos/order.dto';
import { PartialUpdate } from './dtos/partial-update.order';
import { UpdateOrder } from './dtos/update.order.dto';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly order_serv: OrderService) {}

  @Post()
  async create_order(@Param('id') id: string, @Body() data: OrderDto) {
    return this.order_serv.create_order(id, data);
  }

  @Get()
  async orders() {
    return this.order_serv.orders();
  }

  @Get(':id')
  async order(@Param('id') id: string) {
    return this.order_serv.order_id(id);
  }

  @Get('trucks')
  async orders_loading_trucks() {
    return this.order_serv.orders_loading_truck();
  }

  @Get('trucks/rotes')
  async orders_trucks_rotes() {
    return this.order_serv.orders_on_route();
  }

  @Get('filter')
  @HttpCode(HttpStatus.OK)
  async filter(
    @Query() filterOrder: FilterOrderDto,
  ): Promise<FilterOrderDto[]> {
    if (Object.keys(filterOrder).length) {
      return await this.order_serv.filter(filterOrder);
    } else {
      this.order_serv.orders();
    }
  }

  @Patch(':id')
  async update_order(@Param('id') id: string, @Body() data: UpdateOrder) {
    return this.order_serv.update_order(id, data);
  }

  @Put(':id')
  async canceling_order(@Param('id') id: string, @Body() data: PartialUpdate) {
    return this.order_serv.cancel_order(id, data);
  }
}
