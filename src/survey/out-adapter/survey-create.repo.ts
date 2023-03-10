import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateSurveyOutPort,
  SurveyCreateOutPortInputDto,
  SurveyCreateOutPortOutputDto,
} from '../out-port/survey-create.op';
import { Survey } from '../survey.entity';

export class CreateSurveyRepository implements CreateSurveyOutPort {
  constructor(
    @InjectRepository(Survey) private readonly _surveyRepo: Repository<Survey>,
  ) {}

  execute(
    params: SurveyCreateOutPortInputDto,
  ): Promise<SurveyCreateOutPortOutputDto> {
    return this._surveyRepo.save(params);
  }
}
