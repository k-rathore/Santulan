import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controller/users.controller';
import { tbUsers } from './models/entity/users.entity';
import { UsersService } from './service/users.service';
import { config } from "dotenv";

config()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      tbUsers
    ]),
    JwtModule.register({ 
      secret: process.env.JWT_SECRET,
     }),
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
