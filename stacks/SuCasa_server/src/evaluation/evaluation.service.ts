import { Injectable } from '@nestjs/common';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '../user/entities/user.entity';

@Injectable()
export class EvaluationService {
  isRunning() {
    console.log('isRunning');
  }

  constructor(private readonly prisma: PrismaService) {}

  async evaluation(createEvaluationDto: CreateEvaluationDto, user: User) {
    //   const residence = await this.prisma.residence.findFirst({
    //     where: {
    //       id: 'd6665e1f-0bd8-491b-9eeb-e975ad01c713',
    //     },
    //   });
    //
    //   const data = {
    //     ...createEvaluationDto,
    //     user: user,
    //     residence: residence,
    //   };
    //
    //   return await this.prisma.evaluation.create({ data });
  }
}
