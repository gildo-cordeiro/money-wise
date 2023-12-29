import { Category } from './category.';
import { Account } from './account';
import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from './base-entity';
import { Type } from 'src/enums/type.enum';

@Entity('transactions')
export class Transaction extends BaseEntity {
  @Column({ name: 'type', type: 'enum', enum: Type })
  type: Type;

  @Column({ name: 'amount', type: 'float' })
  amount: number;

  @Column({ name: 'date', type: 'date' })
  date: Date;

  @ManyToMany(() => Category, (category) => category.transactions)
  category: Category;

  @ManyToMany(() => Account, (account) => account.transactions)
  account: Account;
}
