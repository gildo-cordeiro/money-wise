import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Roles } from 'src/decoretors/roles.decoretors';
import { Role } from 'src/enums/roles.enum';
import { UserDto } from 'src/model/dto/user';
import { RolesGuard } from 'src/guards/role.guard';
import { UserService } from 'src/services/user.service';
import { AuthGuard } from 'src/guards/auth.guard';

@Roles(Role.ADMIN)
@UseGuards(AuthGuard, RolesGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  create(@Body() data: UserDto) {
    return this.userService.create(data);
  }

  @Get()
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id) {
    return this.userService.findOneById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UserDto) {
    return this.userService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
