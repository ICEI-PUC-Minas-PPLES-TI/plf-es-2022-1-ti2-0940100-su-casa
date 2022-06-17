import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @IsPublic()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('events')
  getEvents(@CurrentUser() user: User) {
    return this.userService.getEventos(user);
  }

  @Get('residence')
  getResidence(@CurrentUser() user: User) {
    return this.userService.getResidence(user);
  }

  @Get('evaluation')
  getEvaluation(@CurrentUser() user: User) {
    return this.userService.getEvaluation(user);
  }

  @IsPublic()
  @Get('count')
  getUserEvent(@CurrentUser() user: User) {
    return this.userService.countUserEvents(user);
  }
}
