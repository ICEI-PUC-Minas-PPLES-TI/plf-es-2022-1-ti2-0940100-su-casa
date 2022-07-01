import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateResidenceDto } from './dto/create-residence.dto';
import { User } from '../user/entities/user.entity';

@Injectable()
export class ResidenceService {
  isRunning() {
    console.log('isRunning');
  }
  constructor(private readonly prisma: PrismaService) {}

  async create(createResidenceDto: CreateResidenceDto, user: User) {
    const data = {
      ...createResidenceDto,
      ownerId: user.id,
    };
    return await this.prisma.residence.create({ data });
  }
}
