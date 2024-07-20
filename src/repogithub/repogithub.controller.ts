import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RepogithubService } from './repogithub.service';
import { CreateRepogithubDto } from './dto/create-repogithub.dto';
import { UpdateRepogithubDto } from './dto/update-repogithub.dto';

@Controller('repogithub')
export class RepogithubController {
  constructor(private readonly repogithubService: RepogithubService) {}

  @Post()
  create(@Body() createRepogithubDto: CreateRepogithubDto) {
    return this.repogithubService.create(createRepogithubDto);
  }

  @Get()
  findAll() {
    return this.repogithubService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.repogithubService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRepogithubDto: UpdateRepogithubDto) {
    return this.repogithubService.update(+id, updateRepogithubDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.repogithubService.remove(+id);
  }
}
