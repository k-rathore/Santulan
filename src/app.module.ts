import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from "dotenv";
import { entities } from './entities';
import { modules } from './modules';
config()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      type: "postgres",
      synchronize: true,
      entities: entities,
      extra: {
        ssl: {
          rejectUnauthorized: false
        }
      }
    }),
    PassportModule.register({
      defaultStrategy: "jwt"
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET
    }),
    ...modules
  ],
})
export class AppModule {}
