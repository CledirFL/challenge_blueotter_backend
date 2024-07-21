import { Module } from '@nestjs/common';
import { RepogithubService } from './repogithub.service';
import { RepogithubController } from './repogithub.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repogithub } from './entities/repogithub.entity';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Module({
  controllers: [RepogithubController],
  providers: [RepogithubService, UserService],
  imports: [
    TypeOrmModule.forFeature([Repogithub, User])]
})
export class RepogithubModule {}
