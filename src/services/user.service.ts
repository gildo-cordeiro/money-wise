import { Injectable } from '@nestjs/common';
import { UUID } from 'crypto';
import { UserDto } from 'src/model/dto/user';
import { PrismaService } from 'src/prisma/prisma.service';

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
    return await this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role,
      },
    });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }
}
