import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Status_Order } from '../enums/order.enum';

@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ name: 'recipient', nullable: true })
  recipient: string;

  @Column({ name: 'delivery_date', nullable: true })
  delivery_date?: Date;

  @Column({ name: 'order_number', nullable: true })
  order_number?: string;

  @Column({ name: 'sender' })
  sender: string;

  @Column({ name: 'weight' })
  weight: number;

  @Column({ name: 'height' })
  height: number;

  @Column({ name: 'shipping type' })
  shipping_type: string;

  @Column({ name: 'width' })
  width: number;

  @Column({ name: 'order_cancellation', default: false, nullable: true })
  order_cancellation?: boolean;

  @Column({
    name: 'status_order',
    type: 'enum',
    enum: Status_Order,
    default: Status_Order.separating_product,
  })
  status_order?: Status_Order;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
