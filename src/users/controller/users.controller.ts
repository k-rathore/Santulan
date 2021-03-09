import { Controller } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { tbUsers } from '../models/entity/users.entity';

@Controller('users')
export class UsersController {
    constructor(
        @InjectRepository(tbUsers)
        private readonly usersRepo: Repository<tbUsers>
    ){}

    async create(body: tbUsers) {
        try {
            const savedUser = await this.usersRepo.save(body)
            return {
                statusCode: 201,
                message: "User created successfully",
                id: savedUser.id
            }
        } catch (error) {
            
        }
    }
}
