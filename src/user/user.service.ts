import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User)
  private userRepository: Repository<User>) { }

  private readonly logger: Logger = new Logger(User.name);


  async create(createUserDto: CreateUserDto) {
    this.logger.log('CREATE: Creating user')
    try {
      this.logger.log('CREATE: Checking if user already exists');
      const foundUser = await this.userRepository.findOne({
        where: {
          login: createUserDto.login,
          id: createUserDto.id,
        }
        
      })
      if (foundUser) {
        this.logger.log('CREATE: User found');
        return foundUser;
      }

      this.logger.log('CREATE: Creating new User');
      const newUser = this.userRepository.create();
      const savedUser = await this.userRepository.save({
        ...newUser,
        ...createUserDto,
      });
      if (savedUser) {
        this.logger.log('CREATE: User created successfully');
      }

      return savedUser;
      
    } catch (error) {
      this.logger.error(`CREATE: Error ${error.message}`);
      throw new InternalServerErrorException(error.message);
    }
  }

  async findOneByLogin(userLogin: string){
    this.logger.log('FIND: Finding user by userLogin')
     try {
      const user = await this.userRepository.findOne({ where: { login: userLogin } })
      this.logger.log('FIND: User found')
      return user;
    } catch (error) {
      this.logger.log(`FIND: Error ${error.message}`)
      throw new InternalServerErrorException(error.message);
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
