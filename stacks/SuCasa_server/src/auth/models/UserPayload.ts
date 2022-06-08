import { Role } from '.prisma/client';

export class UserPayload {
  sub: string;
  email: string;
  name: string;
  phone: string;
  role: Role;
  iat?: number;
  exp?: number;
}
