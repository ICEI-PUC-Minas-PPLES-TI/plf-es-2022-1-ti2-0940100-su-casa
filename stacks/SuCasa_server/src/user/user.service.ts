import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const data = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    const createdUser = await this.prisma.user.create({ data });

    return {
      ...createdUser,
      password: undefined,
    };
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  getUserById(id: string) {
    const user = this.prisma.user.findUnique({
      where: { id },
    });

    return user;
  }

  async get(user) {
    const currentUser = await this.getUserById(user.id);
    return {
      ...currentUser,
      password: undefined,
    };
  }

  async getIdByName(name) {
    const user = this.prisma.user.findUnique({ where: { name } });

    return user;
  }

  async getEventos() {
    const events = await this.prisma.event.findMany({
      where: {
        residenceId: {
          equals: 'd6665e1f-0bd8-491b-9eeb-e975ad01c713',
        },
      },
    });

    console.log(events);
    return events;
  }
}
