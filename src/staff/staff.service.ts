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
    const staffUser = await this.prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });
    if (user.role == 'STAFF') {
      const data = {
        ...createStaffDto,
        userStaffId: staffUser.id,
      };

      return await this.prisma.staff.create({ data });
    } else {
      throw new Error('Your account permissions are not alowed');
    }
  }
}
