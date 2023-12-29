import { Transaction } from './transaction';
import { SavingGoal } from './saving-goals';
import { User } from './user';
import { BaseEntity } from './base-entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity('accounts')
export class Account extends BaseEntity {
  @Column({
    name: 'name',
    unique: true,
  })
  name: string;

  @Column({
    name: 'number',
    type: 'float',
  })
  balance: number;

  @ManyToOne(() => User, (user) => user.accounts)
  user: User;

  @OneToMany(() => Transaction, (transaction) => transaction.account)
  transactions: Transaction[];

  @OneToMany(() => SavingGoal, (savingGoal) => savingGoal.account)
  savingGoals: SavingGoal[];
}
