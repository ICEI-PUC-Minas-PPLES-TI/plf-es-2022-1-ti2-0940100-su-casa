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
      return await this.prisma.event.update({
        where: {
          assignedAt: updateEventDto.assignedAt,
        },
        data: {
          status: updateEventDto.status,
        },
      });
    } else {
      throw new Error('Your account permissions are not allowed');
    }
  }

  async countCanceledEvents() {
    const canceledEvents = await this.prisma.event.count({
      where: {
        status: 'canceled',
      },
    });

    const totalEvents = await this.getEventNumber();

    return (canceledEvents / totalEvents) * 100;
  }

  async countStaffEvents() {
    return await this.prisma.event.groupBy({
      by: ['staffName'],
      _count: {
        _all: true,
      },
    });
  }

  async getEventNumber() {
    return await this.prisma.event.count();
  }

  async getRecurrence() {
    const recurrence = await this.prisma.event.groupBy({
      by: ['promoterId'],
      where: {
        residenceId: 'd6665e1f-0bd8-491b-9eeb-e975ad01c713',
      },
      _count: {
        _all: true,
      },
    });

    const percents = this.getPercents(recurrence);

    return percents;
  }

  async getPercents(recurrence) {
    console.log(recurrence);

    let count = 0;

    const totalPromoter = recurrence.length;

    for (let i = 0; i < totalPromoter; ++i) {
      console.log(recurrence[i]);
      if (recurrence[i]._count._all > 1) {
        count++;
        console.log(count);
      }
    }

    return (count / totalPromoter) * 100;
  }
}
