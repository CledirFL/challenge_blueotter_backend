import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateRepogithubDto } from './dto/create-repogithub.dto';
import { UpdateRepogithubDto } from './dto/update-repogithub.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repogithub } from './entities/repogithub.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';

@Injectable()
export class RepogithubService {
  constructor(@InjectRepository(Repogithub)
  private readonly repogithubRepository: Repository<Repogithub>,
    private readonly userService: UserService
  ) { }

  private readonly logger: Logger = new Logger(Repogithub.name);

  async createRepobyUserLogin(userLogin: string) {
    this.logger.log('CREATE: Creating Repository')
    let success = true;
    let message = 'Repository created successfully';
    let data = null;
    try {
      this.logger.log('CREATE: Fetch user from github')
      const fetchUserFromGithub = await fetch('https://api.github.com/users/' + userLogin)
      const userGithub = await fetchUserFromGithub.json();
      const user = await this.userService.create(userGithub)

      this.logger.log('CREATE: Fetch repository from github')
      const fetchUserRepo = await fetch('https://api.github.com/users/' + user.login + '/repos')
      const userRepo = await fetchUserRepo.json();

      const createdRepo = await Promise.all(userRepo.map(async (repo: Repogithub) => {

        this.logger.log('CREATE: Checking if repo ' + repo.name + ' already exists');
        const alreadyCreated = await this.repogithubRepository.findOne({
          where: { id: repo.id }
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
            return saveRepo;
          }
        }
      }));


      return { success, message, data: createdRepo };

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
      if(user) {
        this.logger.log('FINDALL: User found')
        const userRepo = await this.repogithubRepository.findBy({ owner: { id: user.id}})
        
        return {success, message, data:userRepo}
      }
    } catch (error) {
      this.logger.log(`FINDALL: Error ${error.message}`)
      // return {success, message: error?.message, data}
      throw new InternalServerErrorException(error.message);
    
    }
    
    return await this.repogithubRepository.findBy({
      owner: { login: userLogin}
    });
  }

  create(createRepogithubDto: CreateRepogithubDto) {
    return `This action create new repogithub`;
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
