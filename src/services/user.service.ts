import { Injectable } from '@nestjs/common';
import { UUID } from 'crypto';
import { UserDto } from 'src/model/dto/user';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { User } from 'src/model/user';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findOneById(id: UUID) {
    return this.userRepository.findOneBy({ id });
  }
  async findOneByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }
  async create(user: UserDto) {
    user.password = await bcrypt.hash(user.password, await bcrypt.genSalt());

    return this.userRepository.create(user);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async remove(id: string) {
    throw this.userRepository.delete(id);
  }
  async update(id: string, data: UserDto) {
    throw this.userRepository.update(id, data);
  }
}
