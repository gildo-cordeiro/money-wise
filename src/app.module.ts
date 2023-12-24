import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountController } from './controllers/account.controller';
import { AccountService } from './services/account.service';
import { UserController } from './controllers/user.controller';
import { TransactionController } from './controllers/transaction.controller';
import { UserService } from './services/user.service';
import { TransactionService } from './services/transaction.service';
import { CategoryController } from './controllers/category.controller';
import { CategoryService } from './services/category.service';
import { BudgetController } from './controllers/budget.controller';
import { BudgetService } from './services/budget.service';

@Module({
  imports: [],
  controllers: [AccountController, UserController, TransactionController, CategoryController, BudgetController, AppController],
  providers: [AccountService, UserService, TransactionService, CategoryService, BudgetService, AppService],
})
export class AppModule {}
