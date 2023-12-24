import { Module } from '@nestjs/common';
import { TransactionService } from '../services/transaction.service';
import { TransactionController } from '../controllers/transaction.controller';

@Module({
  imports: [], // import other modules here if needed
  providers: [TransactionService],
  controllers: [TransactionController],
  exports: [], // export services, pipes, guards, etc., that should be available for other modules
})
export class AccountModule {}