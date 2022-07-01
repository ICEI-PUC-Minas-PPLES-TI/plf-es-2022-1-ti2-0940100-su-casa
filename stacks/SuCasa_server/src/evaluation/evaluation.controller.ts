import { Body, Controller, Post } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { User } from '../user/entities/user.entity';
import { IsPublic } from '../auth/decorators/is-public.decorator';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';

@Controller('evaluation')
export class EvaluationController {
  constructor(private readonly evaluationService: EvaluationService) {}

  @Post()
  evaluation(
    @Body() createEvaluationDto: CreateEvaluationDto,
    @CurrentUser() user: User,
  ) {
    return this.evaluationService.evaluation(createEvaluationDto, user);
  }

  @IsPublic()
  @Post()
  showIsRunning() {
    return this.evaluationService.isRunning();
  }
}
