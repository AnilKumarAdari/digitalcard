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
import { BillsService } from './bill.service';
import { ErrorDto } from 'src/users/dto/error.dto';
import { Bills } from './entities/bill.entity';

@Controller('api/bills')
export class BillsController {
  constructor(private readonly billsService: BillsService) {}

  @Post()
  create(@Body() createUserDto: Bills): Promise<Bills | ErrorDto> {
    return this.billsService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<Bills[]> {
    return this.billsService.findAll();
  }

  @Get('/count')
  count(): Promise<number> {
    return this.billsService.count();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.billsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: Bills) {
    return this.billsService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.billsService.remove(id);
  }
}
