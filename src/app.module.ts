import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from "dotenv";
import { entities } from './entities';
import { UsersModule } from './users/users.module';
config()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      type: "mysql",
      synchronize: true,
      entities: entities
    }),
    UsersModule
  ],
})
export class AppModule {}
