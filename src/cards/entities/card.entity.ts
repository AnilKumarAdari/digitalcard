import { ObjectId } from 'mongodb';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ObjectIdColumn,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';

@Entity('cards')
export class Cards {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  cardId: string;

  @Column()
  customerName: string;

  @Column()
  address: string;

  @Column()
  phoneNumber: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;

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
