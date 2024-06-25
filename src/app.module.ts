import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './orders/entities/order.entity';
import { Order } from './orders/order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'mari0001',
      database: 'postgres',
      entities: [OrderEntity],
      synchronize: true,
    }),
    Order,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
