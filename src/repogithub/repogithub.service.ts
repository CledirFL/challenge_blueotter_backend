import { Injectable, InternalServerErrorException, Logger, NotFoundException, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repogithub } from './entities/repogithub.entity';
import { Between, Like, Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { SearchRepogithubDto } from './dto/search-repogithub.dto';

@Injectable()
export class RepogithubService {
  constructor(@InjectRepository(Repogithub)
  private readonly repogithubRepository: Repository<Repogithub>,
    private readonly userService: UserService
  ) { }

  private readonly logger: Logger = new Logger(Repogithub.name);

  private selectedColumn = {
    select: {
      id: true,
      name: true,
      description: true,
      url: true,
      created_at: true,
      language: true,
      owner: {
        name: true,
        id: true,
        login: true,
        avatar_url: true,
      }
    },
    relations: ['owner'], // Ensure the owner relation is loaded
  }
  async createRepobyUserLogin(userLogin: string) {
    this.logger.log('CREATE: Creating Repository')
    let success = true;
    let message = 'Repository created successfully';
    let data = null;
    try {
      this.logger.log('CREATE: Fetch user from github')
      const fetchUserFromGithub = await fetch('https://api.github.com/users/' + userLogin)
      const userGithub = await fetchUserFromGithub.json();

      if (userGithub.message == 'Not Found') {
        throw new NotFoundException('Not Found');
      }
      const user = await this.userService.create(userGithub)

      this.logger.log('CREATE: Fetch repository from github')
      const fetchUserRepo = await fetch('https://api.github.com/users/' + user.login + '/repos')
      const userRepo = await fetchUserRepo.json();

      const createdRepo = await Promise.all(userRepo.map(async (repo: Repogithub) => {

        this.logger.log('CREATE: Checking if repo ' + repo.name + ' already exists');
        const alreadyCreated = await this.repogithubRepository.findOne({
          where: { id: repo.id },
          ...this.selectedColumn
        })

        if (alreadyCreated) {
          this.logger.log('CREATE: Repo ' + alreadyCreated.name + ' already exists')
          return alreadyCreated
        } else {
          this.logger.log('CREATE: Creating new repository ' + repo.name);
          const newRepo = this.repogithubRepository.create({ ...repo, license: repo.license?.name })
          const saveRepo = await this.repogithubRepository.save(newRepo)
          if (saveRepo) {
            this.logger.log('CREATE: Repo ' + saveRepo.name + ' created successfully');
            const selectedRepo = await this.repogithubRepository.findOne({
              ...this.selectedColumn, 
              where: { id: saveRepo.id },
            })
            return selectedRepo;
          }
        }
      }));
      data = createdRepo

      return { success, message, data };

    } catch (error) {
      this.logger.error(`CREATE: Error ${error.message}`);
      // return { success: false, message: error?.message, data };
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAllByUserLogin(userLogin: string) {
    this.logger.log('FINDALL: Fetching all repositories for user ' + userLogin)
    let success = true;
    let message = 'Repository found successfully';
    let data = null;
    try {
      this.logger.log('FINDALL: Finding user ')
      const user = await this.userService.findOneByLogin(userLogin)
      if (user) {
        this.logger.log('FINDALL: User found')
        const userRepo = await this.repogithubRepository.find({
          ...this.selectedColumn, 
          where: {
            owner: { id: user.id },
          }
        })
        data = userRepo
        return { success, message, data }
      }
    } catch (error) {
      this.logger.log(`FINDALL: Error ${error.message}`)
      // return {success, message: error?.message, data}
      throw new InternalServerErrorException(error.message);

    }
  }

  async findAll(query: SearchRepogithubDto) {
    this.logger.log('Search: repositories ')
    let success = true;
    let message = 'Repository found successfully';
    let data = null;
    const { id, created_at, description, url, name, language } = query;

    type Filters = {
      name?: any;
      url?: any;
      description?: any;
      created_at?: any;
      language?: string;
      id?: number;
    };

    let queryConditions: Filters = {}

    if (name) {
      queryConditions.name = Like(`%${name}%`);
    }
    if (url) {
      queryConditions.url = Like(`%${url}%`);
    }
    if (description) {
      queryConditions.description = Like(`%${description}%`);
    }
    if (created_at) {
      const start = new Date(created_at);
      const end = new Date(created_at);
      end.setUTCHours(23, 59, 59, 999)
      queryConditions.created_at = Between(start, end);
    }
    if (language) {
      queryConditions.language = language
    }
    if (id) {
      queryConditions.id = id
    }

    this.logger.log({ queryConditions });

    this.logger.log('Search: Finding repositories');
    try {
      const result = await this.repogithubRepository.find({
        ...this.selectedColumn,
        where: queryConditions
      })
      data = result

      return { success, message, data }
    } catch (error) {
      this.logger.log(`Search: Error ${error.message}`)
      return { success, message, data }

    }

  }
}
