import { Controller, Get, Param, Query } from '@nestjs/common';
import { RepogithubService } from './repogithub.service';
import { SearchRepogithubDto } from './dto/search-repogithub.dto';

@Controller('repository')
export class RepogithubController {
  constructor(private readonly repogithubService: RepogithubService) {}

  @Get('/user/:name')
  createRepobyUserLogin(@Param('name') name: string) {
    return this.repogithubService.createRepobyUserLogin(name);
  }

  @Get('/user/:name/repo')
  findAllRepoByUserLogin(@Param('name') name: string){
    return this.repogithubService.findAllByUserLogin(name);
  }

  @Get('/search')
  findAll(@Query() query: SearchRepogithubDto) {
    return this.repogithubService.findAll(query);
  }

}
