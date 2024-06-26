import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticateModule } from './authenticate/authenticate.module';
import { CartModule } from './cart/cart.module';
import { CartEntity } from './cart/entities/cart.entity';
import { DepartmenttEntity } from './departments/entities/department.entity';
import { OrderEntity } from './orders/entities/order.entity';
import { Order } from './orders/order.module';
import { UserManageEntity } from './user_management/entities/user_management.entity';
import { UserManagement } from './user_management/user_management.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'mari0001',
      database: 'postgres',
      entities: [OrderEntity, UserManageEntity, CartEntity, DepartmenttEntity],
      synchronize: true,
    }),
    UserManagement,
    CartModule,
    Order,
    AuthenticateModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
