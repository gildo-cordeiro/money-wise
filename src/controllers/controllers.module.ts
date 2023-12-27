import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { BudgetController } from './budget.controller';
import { CategoryController } from './category.controller';
import { TransactionController } from './transaction.controller';
import { UserController } from './user.controller';
import { SavingGoalController } from './saving_goal.controller';
import { SeriveModuel } from 'src/services/service.module';

@Module({
  imports: [SeriveModuel],
  controllers: [
    AccountController,
    BudgetController,
    CategoryController,
    TransactionController,
    UserController,
    SavingGoalController,
  ],
})
export class ControllersModule {}
