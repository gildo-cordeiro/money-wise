import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'dotenv';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
      secret: config().parsed.PRIVATE_KEY,
    }),
  ],
  providers: [AuthService],
})
export class AuthModule {}
