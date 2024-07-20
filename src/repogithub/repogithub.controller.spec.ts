import { Test, TestingModule } from '@nestjs/testing';
import { RepogithubController } from './repogithub.controller';
import { RepogithubService } from './repogithub.service';

describe('RepogithubController', () => {
  let controller: RepogithubController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepogithubController],
      providers: [RepogithubService],
    }).compile();

    controller = module.get<RepogithubController>(RepogithubController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
