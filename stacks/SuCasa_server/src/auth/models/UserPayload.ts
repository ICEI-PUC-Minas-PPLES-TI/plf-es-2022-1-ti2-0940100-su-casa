import { Role } from '.prisma/client';
import { Residence } from '../../residence/entities/residence.entity';

export class UserPayload {
  sub: string;
  email: string;
  name: string;
  phone: string;
  role: Role;
  residence: Residence;
  iat?: number;
  exp?: number;
}
