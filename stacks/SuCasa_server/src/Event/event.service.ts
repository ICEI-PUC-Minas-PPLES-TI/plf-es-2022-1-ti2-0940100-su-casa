import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class EventService {
  isRunning() {
    console.log('isRunning');
  }

  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ) {}

  async create(createEventDto: CreateEventDto, user: User) {
    if (user.role == 'PROMOTER') {
      const staff = await this.userService.getIdByName(
        createEventDto.staffName,
      );

      const data = {
        ...createEventDto,
        promoterId: '9f0d9bf5-9e1c-4637-a81b-8336a9fe8fa5',
        residenceId: 'd6665e1f-0bd8-491b-9eeb-e975ad01c713', //residenceId: residenceId,
        staffId: staff.id,
      };
      const createdEvent = await this.prisma.event.create({ data });

      return createdEvent;
    } else {
      throw new Error('Your account permissions are not alowed');
    }
  }
}
