import { User } from '../../user/entities/user.entity';
import { Residence } from '../../residence/entities/residence.entity';

export class Evaluation {
  id?: string;
  residenceId: string;
  userId: string;
  description: string;
  grade: number;
  user: User;
  residence: Residence;
}
