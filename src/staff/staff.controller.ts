import { Body, Controller, Post } from '@nestjs/common';
import { StaffService } from './staff.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { User } from '../user/entities/user.entity';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  // @Post()
  // create(@Body() createStaffDto: CreateStaffDto, @CurrentUser() user: User) {
  //   return this.staffService.create(createStaffDto, user);
  // }

  @IsPublic()
  @Post()
  showIsRunning() {
    return this.staffService.isRunning();
  }
}
