import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';
import { User } from '../user/entities/user.entity';

@Injectable()
export class EventService {
  isRunning() {
    console.log('isRunning');
  }

  constructor(private readonly prisma: PrismaService) {}

  async create(createEventDto: CreateEventDto, user: User) {
    if (user.role == 'PROMOTER') {
      const data = {
        ...createEventDto,
        promoterId: user.id,
        residenceId: 'e4ca471a-2339-4e71-8439-2902518e3f56',
      };
      const createdEvent = await this.prisma.event.create({ data });

      return createdEvent;
    } else {
      throw new Error('Your account permissions are not alowed');
    }
  }
}
