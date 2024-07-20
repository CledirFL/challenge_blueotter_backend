import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { RepogithubModule } from './repogithub/repogithub.module';
import { Repogithub } from './repogithub/entities/repogithub.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => ({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [User, Repogithub],
        synchronize: process.env.DB_SYNCHRONIZE === 'true' ? true : false,
      })
    }),
    UserModule,
    RepogithubModule,
    RepogithubModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
