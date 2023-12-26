import { Module } from '@nestjs/common';

import { DomainModule } from './model/domain.module';
import { ControllersModule } from './controllers/controllers.module';

@Module({
  imports: [DomainModule, ControllersModule]
})
export class AppModule {}
