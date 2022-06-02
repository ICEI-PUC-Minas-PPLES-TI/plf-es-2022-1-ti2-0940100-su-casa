import { Residence } from '../entities/residence.entity';
import { IsNumber, IsObject, IsString } from 'class-validator';

export class CreateResidenceDto extends Residence {
  @IsString()
  cep: string;

  @IsString()
  estado: string;

  @IsString()
  cidade: string;

  @IsString()
  rua: string;

  @IsString()
  numero: string;

  @IsString()
  bairro: string;

  @IsNumber()
  numCapacity: number;

  @IsNumber()
  tamLocal: number;

  @IsNumber()
  numToilet: number;

  @IsString()
  availability: string;

  @IsObject()
  ownerId: string;
}
