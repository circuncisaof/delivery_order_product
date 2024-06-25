import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Status_Order } from '../enums/order.enum';

export class OrderDto {
  @IsNotEmpty({ message: 'weight type its not null' })
  @IsNumber()
  weight: number;

  @IsNotEmpty({ message: 'height type its not null' })
  @IsNumber()
  height: number;

  @IsNotEmpty({ message: 'width type its not null' })
  @IsNumber()
  width: number;

  @IsNotEmpty({ message: 'Shipping type its not null' })
  @IsString()
  shipping_type: string;

  @IsNotEmpty({ message: 'sender type its not null' })
  @IsString()
  sender: string;

  order_number?: string;

  status_order?: Status_Order;

  delivery_date?: Date;

  recipient?: string;

  order_cancellation?: boolean;
}
