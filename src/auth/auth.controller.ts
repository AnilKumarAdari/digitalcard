import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ErrorDto } from 'src/users/dto/error.dto';
import { Users } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { LoginDTO } from './dto/login.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  create(@Body() createUserDto: Users): Promise<Users | ErrorDto> {
    return this.usersService.create(createUserDto);
  }

  @Post('login')
  ValidateUser(@Body() loginDto: LoginDTO): Promise<Users | ErrorDto> {
    return this.usersService.findUser(loginDto.userName).then(
      (user: Users) => {
        if (user.password === loginDto.password) {
          return user;
        } else {
          return new ErrorDto({ description: 'Invalid Users!', name: 'Error' });
        }
      },
      (err: ErrorDto) => {
        return err;
      },
    );
  }
}
