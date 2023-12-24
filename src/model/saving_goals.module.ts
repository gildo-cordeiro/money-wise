import { Module } from '@nestjs/common';
import { SavingGoalsService } from '../services/saving_goals.service';
import { SavingGoalsController } from '../controllers/saving_goals.controller';

@Module({
  imports: [], // import other modules here if needed
  providers: [SavingGoalsService],
  controllers: [SavingGoalsController],
  exports: [], // export services, pipes, guards, etc., that should be available for other modules
})
export class AccountModule {}