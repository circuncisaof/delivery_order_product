import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserManagement } from 'src/user_management/user_management.module';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { AddressEntity } from './entities/address.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AddressEntity]),
    forwardRef(() => UserManagement),
  ],
  controllers: [AddressController],
  providers: [AddressService],
  exports: [],
})
export class AddressModule {}
