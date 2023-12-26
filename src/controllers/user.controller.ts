import { Body, Controller, Get, Injectable, Post } from "@nestjs/common";
import { UserDto } from "src/model/dto/user";
import { UserService } from "src/services/user.service";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }
    
    @Post('save')
    async create(@Body() data: UserDto) {
        return this.userService.create(data);
    }

    @Get()
    list_users() {
        return 'This action returns all users';
    }
}