import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/model/dto/user';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(user: UserDto) {
    return await this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
  }
}
