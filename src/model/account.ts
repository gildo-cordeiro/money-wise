import { Transaction } from './transaction'; // Import the 'Transaction' class
import { SavingGoal } from './saving_goals'; // Import the 'SavingGoal' class
import { User } from './user'; // Import the 'User' class
import { BaseEntity } from './base_entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity('accounts')
export class Account extends BaseEntity {
  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'number' })
  balance: number;

  @ManyToOne(() => User, (user) => user.accounts)
  user: User;

  @OneToMany(() => Transaction, (transaction) => transaction.account)
  transactions: Transaction[];

  @OneToMany(() => SavingGoal, (savingGoal) => savingGoal.account)
  savingGoals: SavingGoal[];
}