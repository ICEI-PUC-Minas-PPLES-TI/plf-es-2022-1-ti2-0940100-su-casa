import { Role } from '.prisma/client';
import { Residence } from '../../residence/entities/residence.entity';

export class User {
  id?: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  role: Role;
  event?: Event;
  residence?: Residence;
}
