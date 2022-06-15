import { CreateEventDto } from './create-event.dto';
import { IsString } from 'class-validator';

export class UpadateEventDto extends CreateEventDto {
  @IsString()
  staus: string;
}
