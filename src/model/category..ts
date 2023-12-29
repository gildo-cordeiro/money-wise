import { Transaction } from './transaction';
import { Budget } from './budget';
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base-entity';

@Entity('categories')
export class Category extends BaseEntity {
  @Column({ name: 'name' })
  name: string;

  @OneToMany(() => Transaction, (transaction) => transaction.category)
  transactions: Transaction[];

  @OneToMany(() => Budget, (budget) => budget.category)
  budgets: Budget[];
}
