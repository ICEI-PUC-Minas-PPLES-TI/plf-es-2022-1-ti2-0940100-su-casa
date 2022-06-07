import { IsNumber, IsString } from 'class-validator';
import { Staff } from '../entities/staff.entity';

export class CreateStaffDto extends Staff {
  @IsString()
  whatsapp: string;

  @IsNumber()
  minConvidados: number;

  @IsNumber()
  maxConvidados: number;

  @IsNumber()
  price: number;

  @IsString()
  description: string;
}