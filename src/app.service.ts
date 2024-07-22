import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `O desafio consiste em desenvolver uma solução que permita interagir e manipular dados de utilizadores do GitHub.`;
  }
}
