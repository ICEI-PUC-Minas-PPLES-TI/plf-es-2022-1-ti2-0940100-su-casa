import { User } from '../../user/entities/user.entity';
import { BuffetType } from 'prisma';

export class Staff {
  userId: string;
  whatsapp: string;
  description: string;
  minConvidados: number;
  maxConvidados: number;
  tipoBuffet: BuffetType;
  user?: User;
}
