import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';
import { tbUsers } from '../models/entity/users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(tbUsers)
        private readonly usersRepo: Repository<tbUsers>,
        private readonly jwtService: JwtService
    ){}

    async create(body: tbUsers) {
        try {
            const savedUser = await this.usersRepo.save(body)
            const accessToken = this.jwtService.sign({id: savedUser.id})
            return {
                statusCode: 201,
                message: "User created successfully",
                id: savedUser.id,
                accessToken
            }
        } catch (error) {
            if (error.code == 23505) {
                throw new ConflictException(`User already exists with email or phone`)
            } else if (error instanceof QueryFailedError) {
                throw new BadRequestException(error.message)
            } else {
                throw error
            }
        }
    }

    async doExists(type: string, value: string) {
        try {
            const user = await this.usersRepo.findOne({
                where: {
                    [type]: value
                }
            })
            if(user) return true
            return false
        } catch (error) {
            throw error
        }
    }
}
