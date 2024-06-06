import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorDto } from 'src/users/dto/error.dto';
import { MongoRepository, ObjectId } from 'typeorm';
import { Products } from './entities/products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepository: MongoRepository<Products>,
  ) {}

  async create(createUserDto: Products): Promise<Products | ErrorDto> {
    try {
      return this.productsRepository.save(createUserDto);
    } catch (err) {
      return new ErrorDto({ name: 'Error', description: err });
    }
  }

  async findAll(): Promise<Products[]> {
    return this.productsRepository.find();
  }

  async findOne(id: string) {
    return this.productsRepository.findOne({ where: { id: new ObjectId(id) } });
  }

  async findUser(email: string) {
    return this.productsRepository.findOne({ where: { email: email } });
  }

  async update(id: string, updateUserDto: Products) {
    if (id) {
      let result = await this.productsRepository.update(id, updateUserDto);
      return result;
    } else {
      return new ErrorDto({ name: 'Error', description: 'Invalid user ID!' });
    }
  }

  async remove(id: string) {
    let user = await this.productsRepository.findOne({
      where: { id: new ObjectId(id) },
    });
    return this.productsRepository.remove(user);
  }
}
