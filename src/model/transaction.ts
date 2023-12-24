import { Category } from './category';
import { Account } from './account';
import { Injectable } from '@nestjs/common';
import { ManyToMany, OneToMany } from 'typeorm';

@Injectable()
export class Transaction {
    id: number;
    type: 'income' | 'expense';
    amount: number;
    date: Date;

    @ManyToMany(() => Category, (category) => category.transactions)
    category: Category;

    @ManyToMany(() => Account, (account) => account.transactions)
    account: Account;
  }