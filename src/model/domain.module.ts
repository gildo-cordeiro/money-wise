import { Module } from '@nestjs/common';
import { Account } from './account';
import { Budget } from './budget';
import { Category } from './category';
import { SavingGoal } from './saving_goals';
import { Transaction } from './transaction';
import { User } from './user';

@Module({
  providers: [Account, Budget, Category, SavingGoal, Transaction, User],
  exports: [],
})
export class DomainModule {}
