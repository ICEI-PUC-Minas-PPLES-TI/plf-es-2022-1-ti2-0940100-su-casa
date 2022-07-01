import { Evaluation } from '../entities/evaluation.entity';
import { IsNumber, IsString } from 'class-validator';
import { User } from '../../user/entities/user.entity';
import { Residence } from '../../residence/entities/residence.entity';

export class CreateEvaluationDto extends Evaluation {
  @IsNumber()
  grade: number;

  @IsString()
  description: string;
}
