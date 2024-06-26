import { UserManageEntity } from 'src/user_management/entities/user_management.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Status_Order } from '../enums/order.enum';
import { AddressEntity } from 'src/address/entities/address.entity';

@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'id_user', nullable: false })
  id_user: string;

  @Column({ name: 'id_address', nullable: false })
  id_address: string;

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

  @ManyToOne(() => UserManageEntity, (user) => user.orders)
  @JoinColumn({ name: 'id_user', referencedColumnName: 'id' })
  users?: UserManageEntity;


  @ManyToOne(() => AddressEntity, (address) => address.orders)
  @JoinColumn({ name: 'id_user', referencedColumnName: 'id' })
  address?: AddressEntity;
}
