import { User } from '../../user/entities/user.entity';

export class Staff {
  userId: string;
  whatsapp: string;
  description: string;
  minConvidados: number;
  maxConvidados: number;
  tipoBuffet: string;
  user?: User;
}
