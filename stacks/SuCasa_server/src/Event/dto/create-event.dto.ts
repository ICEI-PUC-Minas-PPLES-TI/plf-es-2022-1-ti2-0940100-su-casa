import { Event } from '../entities/event.entity';
import { IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateEventDto extends Event {
  @IsNumber()
  duration: number;

  @IsNumber()
  numGuests: number;

  @IsDateString('YYYY-MM-DD')
  assignedAt: string;

  @IsString()
  staffName: string;

  @IsString()
  status: string;
}
