import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { UpadateEventDto } from './dto/update-event.dto';

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
        promoterId: user.id,
        residenceId: 'd6665e1f-0bd8-491b-9eeb-e975ad01c713',
        staffId: staff.id,
      };
      return await this.prisma.event.create({ data });
    } else {
      throw new Error('Your account permissions are not allowed');
    }
  }

  async deleteEvent(updateEventDto: UpadateEventDto, user: User) {
    if (user.role == 'PROMOTER') {
      return this.prisma.event.update({
        where: {
          id: updateEventDto.id,
        },
        data: {
          status: updateEventDto.status,
        },
      });
    } else {
      throw new Error('Your account permissions are not allowed');
    }
  }
}
