import { Account } from './account';
import { BaseEntity } from './base_entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('users')
export class User extends BaseEntity{
  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'password' })
  password: string;

  @OneToMany(() => Account, (account) => account.user)
  accounts: Account[];
}

