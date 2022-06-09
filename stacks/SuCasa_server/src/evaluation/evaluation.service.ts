import { Injectable } from '@nestjs/common';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EvaluationService {
  isRunning() {
    console.log('isRunning');
  }

  constructor(private readonly prisma: PrismaService) {}

  async evaluation(createEvaluationDto: CreateEvaluationDto, id: string) {
    const data = {
      ...createEvaluationDto,
      userId: id,
      residenceId: 'd6665e1f-0bd8-491b-9eeb-e975ad01c713',
    };

    const createdEvaluation = await this.prisma.evaluation.create({ data });

    console.log(createdEvaluation);

    return createdEvaluation;
  }
}
