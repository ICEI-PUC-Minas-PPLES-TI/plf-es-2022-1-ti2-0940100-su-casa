import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { Residence } from '../residence/entities/residence.entity';

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
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async get(user) {
    return user;
  }

  async getIdByName(name) {
    return this.prisma.user.findUnique({ where: { name } });
  }

  async getEventos(user: User) {
    if (user.role == 'OWNER') {
      const residence: Residence = await this.getResidence(user);

      return await this.prisma.event.findMany({
        where: {
          residenceId: {
            equals: residence.id,
          },
        },
      });
    } else if (user.role == 'PROMOTER') {
      return await this.prisma.event.findMany({
        where: {
          promoterId: {
            equals: user.id,
          },
        },
      });
    } else if (user.role == 'STAFF') {
      return await this.prisma.event.findMany({
        where: {
          staffId: {
            equals: user.id,
          },
        },
      });
    } else {
      throw new Error('Not Allowed');
    }
  }

  async getResidence(user: User) {
    if (user.role == 'OWNER') {
      return await this.prisma.residence.findFirst({
        where: {
          ownerId: user.id,
        },
      });
    } else {
      throw new Error('Not Allowed');
    }
  }

  async getEvaluation(user: User) {
    if (user.role == 'OWNER') {
      const residence: Residence = await this.getResidence(user);

      return await this.prisma.evaluation.findMany({
        where: {
          residenceId: {
            equals: residence.id,
          },
        },
      });
    } else {
      throw new Error('Not Allowed');
    }
  }

  async countUserEvents(user: User) {
    if (user.role == 'OWNER') {
      return await this.prisma.user.count({
        where: {
          role: 'PROMOTER',
          event: {},
        },
      });
    }
  }
}
