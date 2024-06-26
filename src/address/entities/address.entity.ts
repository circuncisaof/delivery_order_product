import { OrderEntity } from 'src/orders/entities/order.entity';
import { UserManageEntity } from 'src/user_management/entities/user_management.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('adresses')
export class AddressEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, name: 'id_user' })
  id_user: string;

  @Column({ nullable: false, name: 'address' })
  address: string;

  @Column({ nullable: false, name: 'number_home' })
  number_home: number;

  @Column({ nullable: true, name: 'complements' })
  complements: string;

  @Column({ nullable: false, name: 'neighborhoods' })
  neighborhoods: string;

  @Column({ nullable: false, name: 'zip_code' })
  zip_code: string;

  @OneToOne(() => UserManageEntity, (user: UserManageEntity) => user.address)
  user: UserManageEntity;

  @ManyToOne(() => OrderEntity, (order) => order.address)
  order?: OrderEntity;
}
