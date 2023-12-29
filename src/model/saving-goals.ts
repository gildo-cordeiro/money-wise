import { Column, Entity, OneToMany } from 'typeorm';
import { Account } from './account';
import { BaseEntity } from './base-entity';

@Entity('saving_goals')
export class SavingGoal extends BaseEntity {
  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'target_amount', type: 'float' })
  targetAmount: number;

  @Column({ name: 'current_amount', type: 'float' })
  currentAmount: number;

  @Column({ name: 'due_date', type: 'date' })
  dueDate: Date;

  @OneToMany(() => Account, (account) => account.savingGoals)
  account: Account;
}
