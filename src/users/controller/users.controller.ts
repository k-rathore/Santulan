import { Body, Controller, Post } from '@nestjs/common';
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
}
