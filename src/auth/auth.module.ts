import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { ServiceModule } from 'src/services/service.module';

@Module({
  imports: [
    JwtModule.register({ secret: process.env.JWT_SECRET }),
    ServiceModule,
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
