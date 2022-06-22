import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { User } from '../user/entities/user.entity';

@Injectable()
export class StaffService {
  isRunning() {
    console.log('isRunning');
  }
  constructor(private readonly prisma: PrismaService) {}

  async create(createStaffDto: CreateStaffDto, user: User) {
    console.log(user.id);

    if (user.role == 'STAFF') {
      const data = {
        ...createStaffDto,
        userId: user.id,
        userStaff: user,
        price: 10,
      };

      return await this.prisma.staff.create({ data });
    } else {
      throw new Error('Your account permissions are not alowed');
    }
  }
}
