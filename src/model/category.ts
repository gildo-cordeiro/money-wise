import { Transaction } from './transaction'; // Import the 'Transaction' class
import { Budget } from './budget'; // Import the 'Budget' class
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base_entity';

@Entity('categories')
export class Category extends BaseEntity {
  @Column({ name: 'name' })
  name: string;

  @OneToMany(() => Transaction, (transaction) => transaction.category)
  transactions: Transaction[];

  @OneToMany(() => Budget, (budget) => budget.category)
  budgets: Budget[];
}