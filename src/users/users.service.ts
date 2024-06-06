import { Injectable, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Users } from './entities/user.entity';
import { ObjectId } from 'mongodb';
import { ErrorDto } from './dto/error.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: MongoRepository<Users>,
  ) {}

  async create(createUserDto: Users): Promise<Users | ErrorDto> {
    try {
      return this.userRepository.save(createUserDto);
    } catch (err) {
      return new ErrorDto({ name: 'Error', description: err });
    }
  }

  async findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  async findOne(id: string) {
    return this.userRepository.findOne({ where: { id: new ObjectId(id) } });
  }

  async findUser(email: string) {
    return this.userRepository.findOne({ where: { email: email } });
  }

  async update(id: string, updateUserDto: Users) {
    if (id) {
      let result = await this.userRepository.update(
        new ObjectId(id),
        updateUserDto,
      );
      return result;
    } else {
      return new ErrorDto({ name: 'Error', description: 'Invalid user ID!' });
    }
  }

  async remove(id: string) {
    let user = await this.userRepository.findOne({
      where: { id: new ObjectId(id) },
    });
    return this.userRepository.remove(user);
  }
}
