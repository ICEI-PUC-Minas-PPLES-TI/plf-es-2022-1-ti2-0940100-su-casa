import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateResidenceDto } from './dto/create-residence.dto';
@Injectable()
export class ResidenceService {
  isRunning() {
    console.log('isRunning');
  }
  constructor(private readonly prisma: PrismaService) {}

  async create(createResidenceDto: CreateResidenceDto) {
    const data = createResidenceDto;

    const createdResidence = await this.prisma.residence.create({ data });

    return createdResidence;
  }
}