import { Module } from '@nestjs/common';
import { BudgetService } from '../services/budget.service';
import { BudgetController } from '../controllers/budget.controller';

@Module({
  imports: [], // import other modules here if needed
  providers: [BudgetService],
  controllers: [BudgetController],
  exports: [], // export services, pipes, guards, etc., that should be available for other modules
})
export class AccountModule {}