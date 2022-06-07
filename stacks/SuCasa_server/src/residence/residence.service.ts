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
    if (user.role == 'OWNER') {
      const data = {
        ...createResidenceDto,
        ownerId: user.id,
      };

      const createdResidence = await this.prisma.residence.create({ data });

      return createdResidence;
    } else {
      throw new Error('Your account permissions are not alowed');
    }
  }
}
