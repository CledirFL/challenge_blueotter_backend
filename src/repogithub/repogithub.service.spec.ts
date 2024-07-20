import { Test, TestingModule } from '@nestjs/testing';
import { RepogithubService } from './repogithub.service';

describe('RepogithubService', () => {
  let service: RepogithubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepogithubService],
    }).compile();

    service = module.get<RepogithubService>(RepogithubService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
