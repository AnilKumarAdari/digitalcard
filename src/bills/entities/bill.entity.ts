import { ObjectId } from 'mongodb';
import { Products } from 'src/products/entities/products.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ObjectIdColumn,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';

@Entity('bills')
export class Bills {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  JobId: string;

  @Column()
  customerName: string;

  @Column()
  address: string;

  @Column()
  phoneNumber: string;

  @Column()
  productName: string;

  @Column()
  modelNumber: string;

  @Column()
  serialNumber: string;

  @Column()
  complaint: string;

  @Column()
  otherAccessories: string;

  @Column()
  status: string;

  @Column()
  spares: any[];

  @Column()
  paidAmount: number;

  @Column()
  balance: number;

  @Column()
  totalAmount: number;

  @Column()
  assignedTo: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;

  @Column()
  statusDescription: Date;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @Column()
  @UpdateDateColumn({
    type: 'timestamp',
    precision: 3,
  })
  updated_at: Date;
}
