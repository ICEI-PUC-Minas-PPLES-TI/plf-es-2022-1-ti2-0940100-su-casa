import { Role } from 'prisma';
import { Residence } from '../../residence/entities/residence.entity';
import { Evaluation } from '../../evaluation/entities/evaluation.entity';

export class User {
  id?: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  role: Role;
  event?: Event;
  residence?: Residence;
  evaluation?: Evaluation;
}
