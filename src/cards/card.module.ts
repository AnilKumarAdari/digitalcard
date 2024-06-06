import { Module } from '@nestjs/common';
import { CardsController } from './card.controller';
import { CardsService } from './card.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cards } from './entities/card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cards])],
  controllers: [CardsController],
  providers: [CardsService],
})
export class CardsModule {}
