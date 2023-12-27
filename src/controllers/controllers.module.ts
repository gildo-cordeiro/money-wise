import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { BudgetController } from './budget.controller';
import { CategoryController } from './category.controller';
import { TransactionController } from './transaction.controller';
import { SavingGoalController } from './saving_goal.controller';
import { ServiceModule } from 'src/services/service.module';
import { LoginController } from './login.controller';
import { AuthModule } from 'src/auth/auth.module';
import { UserController } from './user.controller';

@Module({
  imports: [ServiceModule, AuthModule],
  controllers: [
    AccountController,
    BudgetController,
    CategoryController,
    TransactionController,
    LoginController,
    SavingGoalController,
    UserController,
  ],
})
export class ControllersModule {}
