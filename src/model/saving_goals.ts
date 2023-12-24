import { Column, Entity, OneToMany } from 'typeorm';
import { Account } from './account';
import { BaseEntity } from './base_entity';

@Entity('saving_goals')
export class SavingGoal extends BaseEntity {
  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'target_amount', type: 'float', precision: 10, scale: 2})
  targetAmount: number;

  @Column({ name: 'current_amount', type: 'float', precision: 10, scale: 2})
  currentAmount: number;

  @Column({ name: 'due_date', type: 'date' })
  dueDate: Date;

  @OneToMany(() => Account, (account) => account.savingGoals)
  account: Account;
}