import { Module } from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { CategoryController } from '../controllers/category.controller';

@Module({
  imports: [], // import other modules here if needed
  providers: [CategoryService],
  controllers: [CategoryController],
  exports: [], // export services, pipes, guards, etc., that should be available for other modules
})
export class AccountModule {}