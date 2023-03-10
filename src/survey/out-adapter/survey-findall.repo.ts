import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  FindAllSurveyOutPort,
  SurveyFindAllOutPortInputDto,
  SurveyFindAllOutPortOutputDto,
} from '../out-port/survey-findall.op';
import { Survey } from '../survey.entity';

export class FindAllSurveyRepository implements FindAllSurveyOutPort {
  constructor(
    @InjectRepository(Survey) private readonly _surveyRepo: Repository<Survey>,
  ) {}

  execute(
    params: SurveyFindAllOutPortInputDto,
  ): Promise<SurveyFindAllOutPortOutputDto> {
    return this._surveyRepo.findAndCount({
      skip: (params.page - 1) * params.size,
      take: params.size,
      order: {
        name: params.sort,
      },
    });
  }
}
