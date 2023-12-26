import { Transaction } from './transaction'; // Import the 'Transaction' class
import { Budget } from './budget'; // Import the 'Budget' class

export class Category {
  name: string;
  transactions: Transaction[];
  budgets: Budget[];
}