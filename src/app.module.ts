import { Module } from '@nestjs/common';
import { ControllersModule } from './controllers/controllers.module';
import { AuthModule } from './auth/auth.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './model/account';
import { Budget } from './model/budget';
import { Category } from './model/category.';
import { SavingGoal } from './model/saving-goals';
import { Transaction } from './model/transaction';
import { User } from './model/user';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      entities: [Account, Budget, Category, SavingGoal, Transaction, User],
      synchronize: true,
      logging: true,
    }),
    ControllersModule,
    AuthModule,
    ThrottlerModule.forRoot({
      throttlers: [
        {
          limit: 10,
          ttl: 60,
        },
      ],
    }),
  ],
})
export class AppModule {}
