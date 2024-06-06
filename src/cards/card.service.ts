import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorDto } from 'src/users/dto/error.dto';
import { MongoRepository, ObjectId } from 'typeorm';
import { Cards } from './entities/card.entity';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Cards)
    private readonly cardsRepository: MongoRepository<Cards>,
  ) {}

  async create(createUserDto: Cards): Promise<Cards | ErrorDto> {
    try {
      return this.cardsRepository.save(createUserDto);
    } catch (err) {
      return new ErrorDto({ name: 'Error', description: err });
    }
  }

  async findAll(): Promise<Cards[]> {
    return await this.cardsRepository.find({
      order: {
        updatedAt: 'DESC',
      },
    });
  }

  async count(): Promise<number> {
    return await this.cardsRepository.count();
  }

  async findOne(id: string) {
    return this.cardsRepository.findOne({ where: { id: new ObjectId(id) } });
  }

  async findUser(email: string) {
    return this.cardsRepository.findOne({ where: { email: email } });
  }

  async update(id: string, updateUserDto: Cards) {
    if (id) {
      updateUserDto.updatedAt = new Date();
      let result = await this.cardsRepository.update(id, updateUserDto);
      return result;
    } else {
      return new ErrorDto({ name: 'Error', description: 'Invalid user ID!' });
    }
  }

  async remove(id: string) {
    let user = await this.cardsRepository.findOne({
      where: { id: new ObjectId(id) },
    });
    return this.cardsRepository.remove(user);
  }
}
