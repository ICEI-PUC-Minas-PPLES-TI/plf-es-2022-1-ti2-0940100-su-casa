import { Evaluation } from '../entities/evaluation.entity';
import { IsNumber, IsString } from 'class-validator';

export class CreateEvaluationDto extends Evaluation {
  @IsNumber()
  grade: number;

  @IsString()
  description: string;
}
