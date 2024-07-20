import { Injectable } from '@nestjs/common';
import { CreateRepogithubDto } from './dto/create-repogithub.dto';
import { UpdateRepogithubDto } from './dto/update-repogithub.dto';

@Injectable()
export class RepogithubService {
  create(createRepogithubDto: CreateRepogithubDto) {
    return 'This action adds a new repogithub';
  }

  findAll() {
    return `This action returns all repogithub`;
  }

  findOne(id: number) {
    return `This action returns a #${id} repogithub`;
  }

  update(id: number, updateRepogithubDto: UpdateRepogithubDto) {
    return `This action updates a #${id} repogithub`;
  }

  remove(id: number) {
    return `This action removes a #${id} repogithub`;
  }
}
