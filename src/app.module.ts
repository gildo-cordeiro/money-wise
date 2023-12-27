import { Module } from '@nestjs/common';

import { DomainModule } from './model/domain.module';
import { ControllersModule } from './controllers/controllers.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DomainModule, ControllersModule, AuthModule],
})
export class AppModule {}
