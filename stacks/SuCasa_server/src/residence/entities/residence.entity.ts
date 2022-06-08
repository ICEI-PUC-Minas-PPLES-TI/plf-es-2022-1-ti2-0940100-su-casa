import { User } from '../../user/entities/user.entity';

export class Residence {
  id?: string;
  owner?: User;
  cep: string;
  estado: string;
  cidade: string;
  rua: string;
  numero: string;
  bairro: string;
  numCapacity: number;
  tamLocal: number;
  numToilet: number;
  availability: string;
}
