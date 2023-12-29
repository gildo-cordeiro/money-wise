import { Injectable } from '@nestjs/common';
import { UUID } from 'crypto';
import { UserDto } from 'src/model/dto/user';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async findOneById(id: UUID) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async create(user: UserDto) {
    user.password = await bcrypt.hash(user.password, await bcrypt.genSalt());

    return this.prisma.user.create({
      data: user,
    });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async remove(id: string) {
    throw new Error('Method not implemented.');
  }
  async update(id: string, data: UserDto) {
    throw new Error('Method not implemented.');
  }
}
