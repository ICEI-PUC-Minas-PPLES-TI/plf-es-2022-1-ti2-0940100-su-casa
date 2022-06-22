import { User } from '../../user/entities/user.entity';

export class Staff {
  userStaffId: string;
  whatsapp: string;
  description: string;
  minConvidados: number;
  maxConvidados: number;
  tipoBuffet: string;
  user?: User;
}
