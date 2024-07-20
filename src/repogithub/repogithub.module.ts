import { Module } from '@nestjs/common';
import { RepogithubService } from './repogithub.service';
import { RepogithubController } from './repogithub.controller';

@Module({
  controllers: [RepogithubController],
  providers: [RepogithubService],
})
export class RepogithubModule {}
