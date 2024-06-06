import { Module } from '@nestjs/common';
import { BillsController } from './bill.controller';
import { BillsService } from './bill.service';
import { Bills } from './entities/bill.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Bills])],
  controllers: [BillsController],
  providers: [BillsService],
})
export class BillsModule {}
