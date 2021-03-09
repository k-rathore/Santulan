import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { tbUsers } from '../models/entity/users.entity';
import { UsersService } from '../service/users.service';
@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: UsersService
    ){}

    @Post()
    create(@Body() body: tbUsers) {
        return this.userService.create(body)
    }

    @Get("exists/:type/:value")
    doExists(@Param("type") type: string, @Param("value") value: string) {
        return this.userService.doExists(type, value)
    }
}
