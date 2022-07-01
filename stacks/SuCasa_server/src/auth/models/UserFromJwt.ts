import { Role } from 'prisma';

export class UserFromJwt {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: Role;
}
