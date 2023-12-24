import { Module } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserController } from '../controllers/user.controller';

@Module({
  imports: [], // import other modules here if needed
  providers: [UserService],
  controllers: [UserController],
  exports: [], // export services, pipes, guards, etc., that should be available for other modules
})
export class AccountModule {}