import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from 'src/address/address.module';
import { UserManagement } from 'src/user_management/user_management.module';
import { OrderEntity } from './entities/order.entity';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderEntity]),
    UserManagement,
    AddressModule,
  ],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [],
})
export class Order {}
