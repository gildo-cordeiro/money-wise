import { Column, Entity, OneToMany } from 'typeorm';
import { Account } from './account';

export class SavingGoal {
  name: string;
  targetAmount: number;
  currentAmount: number;
  dueDate: Date;
  account: Account;
}