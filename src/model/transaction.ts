import { Category } from './category';
import { Account } from './account';

export class Transaction {
    id: number;
    type: 'income' | 'expense';
    amount: number;
    date: Date;
    category: Category;
    account: Account;
  }