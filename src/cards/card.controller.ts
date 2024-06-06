import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CardsService } from './card.service';
import { ErrorDto } from 'src/users/dto/error.dto';
import { Cards } from './entities/card.entity';

@Controller('api/cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post()
  create(@Body() createUserDto: Cards): Promise<Cards | ErrorDto> {
    return this.cardsService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<Cards[]> {
    return this.cardsService.findAll();
  }

  @Get('/count')
  count(): Promise<number> {
    return this.cardsService.count();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cardsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: Cards) {
    return this.cardsService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardsService.remove(id);
  }
}
