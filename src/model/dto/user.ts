import { IsEmail, IsEnum, IsOptional, MinLength } from 'class-validator';
import { Role } from 'src/enums/roles.enum';

export class UserDto {
  name: string;

  @IsEmail()
  email: string;

  @MinLength(4)
  password: string;

  @IsOptional()
  @IsEnum(Role)
  role: number;
}
