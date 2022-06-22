import { IsNumber, IsString } from 'class-validator';
import { Staff } from '../entities/staff.entity';
import { BuffetType } from '.prisma/client';

export class CreateStaffDto extends Staff {
  @IsString()
  userStaffId: string;

  @IsString()
  whatsapp: string;

  @IsNumber()
  minConvidados: number;

  @IsNumber()
  maxConvidados: number;

  @IsString()
  description: string;

  @IsString()
  tipoBuffet: BuffetType;
}
