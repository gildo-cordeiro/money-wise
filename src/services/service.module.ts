import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { AccountService } from "./account.service";
import { BudgetService } from "./budget.service";
import { CategoryService } from "./category.service";
import { SavingGoalsService } from "./saving_goals.service";
import { TransactionService } from "./transaction.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    providers: [UserService, AccountService, BudgetService, CategoryService, SavingGoalsService, TransactionService],
    exports: [UserService, AccountService, BudgetService, CategoryService, SavingGoalsService, TransactionService],
})
export class SeriveModuel {}