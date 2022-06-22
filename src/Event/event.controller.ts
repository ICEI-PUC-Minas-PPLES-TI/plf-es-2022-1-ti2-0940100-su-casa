import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { User } from '../user/entities/user.entity';
import { IsPublic } from '../auth/decorators/is-public.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { UpadateEventDto } from './dto/update-event.dto';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  create(@Body() createEventDto: CreateEventDto, @CurrentUser() user: User) {
    return this.eventService.create(createEventDto, user);
  }

  @Post('delete')
  delete(@Body() updateEventDto: UpadateEventDto, @CurrentUser() user: User) {
    return this.eventService.deleteEvent(updateEventDto, user);
  }

  @IsPublic()
  @Post()
  showIsRunning() {
    return this.eventService.isRunning();
  }

  @IsPublic()
  @Get('cancel')
  getCancel() {
    return this.eventService.countCanceledEvents();
  }

  @IsPublic()
  @Get('staff')
  countStaffEvents(@CurrentUser() user: User) {
    return this.eventService.countStaffEvents();
  }

  @IsPublic()
  @Get('number')
  getEventNumber(@CurrentUser() user: User) {
    return this.eventService.getEventNumber();
  }

  @IsPublic()
  @Get('recurrence')
  getRecurrence(@CurrentUser() user: User) {
    return this.eventService.getRecurrence();
  }
}
