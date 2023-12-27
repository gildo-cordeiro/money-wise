import { Transaction } from './transaction';
import { SavingGoal } from './saving_goals';
import { User } from './user';

export class Account {
  name: string;
  balance: number;
  user: User;
  transactions: Transaction[];
  savingGoals: SavingGoal[];
}
