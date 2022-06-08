import { Controller, Post, Body } from '@nestjs/common';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { ResidenceService } from './residence.service';
import { CreateResidenceDto } from './dto/create-residence.dto';

@Controller('property')
export class ResidenceController {
  constructor(private readonly residenceService: ResidenceService) {}

  @IsPublic()
  @Post()
  create(@Body() createResidenceDto: CreateResidenceDto) {
    return this.residenceService.create(createResidenceDto);
  }
  @IsPublic()
  @Post()
  showIsRunning() {
    return this.residenceService.isRunning();
  }
}
