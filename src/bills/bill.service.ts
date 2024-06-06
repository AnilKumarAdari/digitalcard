import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorDto } from 'src/users/dto/error.dto';
import { MongoRepository, ObjectId } from 'typeorm';
import { Bills } from './entities/bill.entity';

@Injectable()
export class BillsService {
  constructor(
    @InjectRepository(Bills)
    private readonly billsRepository: MongoRepository<Bills>,
  ) {}

  async create(createUserDto: Bills): Promise<Bills | ErrorDto> {
    try {
      return this.billsRepository.save(createUserDto);
    } catch (err) {
      return new ErrorDto({ name: 'Error', description: err });
    }
  }

  async findAll(): Promise<Bills[]> {
    return await this.billsRepository.find({
      order: {
        updatedAt: 'DESC',
      },
    });
  }

  async count(): Promise<number> {
    return await this.billsRepository.count();
  }

  async findOne(id: string) {
    return this.billsRepository.findOne({ where: { id: new ObjectId(id) } });
  }

  async findUser(email: string) {
    return this.billsRepository.findOne({ where: { email: email } });
  }

  async update(id: string, updateUserDto: Bills) {
    if (id) {
      updateUserDto.updatedAt = new Date();
      let result = await this.billsRepository.update(id, updateUserDto);
      return result;
    } else {
      return new ErrorDto({ name: 'Error', description: 'Invalid user ID!' });
    }
  }

  async remove(id: string) {
    let user = await this.billsRepository.findOne({
      where: { id: new ObjectId(id) },
    });
    return this.billsRepository.remove(user);
  }
}
