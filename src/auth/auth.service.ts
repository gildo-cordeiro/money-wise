import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UserDto } from 'src/model/dto/user';
import { UserService } from 'src/services/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  createToken(user: User) {
    const payload = { id: user.id, username: user.email };
    return {
      access_token: this.jwtService.sign(payload, {
        expiresIn: '1d',
        issuer: 'API Money Wise App',
      }),
    };
  }

  checkToken(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch (e) {
      throw new UnauthorizedException('Wrong token provided');
    }
  }

  async signIn(email: string, pass: string) {
    const user = await this.userService.findOne(email);

    if (!user) {
      throw new UnauthorizedException('Wrong credentials provided');
    }

    if (!(await bcrypt.compare(pass, user.password))) {
      throw new UnauthorizedException('Wrong credentials provided');
    }

    return this.createToken(user);
  }

  signOut() {
    return { message: 'User signed out' };
  }

  async signUp(data: UserDto) {
    if (await this.userService.findOne(data.email)) {
      throw new UnauthorizedException('User already exists');
    }

    const user = await this.userService.create(data);
    return this.createToken(user);
  }
}
