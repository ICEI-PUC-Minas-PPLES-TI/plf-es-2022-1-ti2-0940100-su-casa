import { Controller, Post, Body } from '@nestjs/common';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { ResidenceService } from './residence.service';
import { CreateResidenceDto } from './dto/create-residence.dto';
import { User } from '../user/entities/user.entity';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@Controller('residence')
export class ResidenceController {
  constructor(private readonly residenceService: ResidenceService) {}

  @Post()
  create(
    @Body() createResidenceDto: CreateResidenceDto,
    @CurrentUser() user: User,
  ) {
    return this.residenceService.create(createResidenceDto, user);
  }
  @IsPublic()
  @Post()
  showIsRunning() {
    return this.residenceService.isRunning();
  }
}
