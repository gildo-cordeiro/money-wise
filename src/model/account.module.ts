import { Module } from '@nestjs/common';
import { AccountService } from '../services/account.service';
import { AccountController } from '../controllers/account.controller';

@Module({
  imports: [], // import other modules here if needed
  providers: [AccountService],
  controllers: [AccountController],
  exports: [AccountModule], // export services, pipes, guards, etc., that should be available for other modules
})
export class AccountModule {}