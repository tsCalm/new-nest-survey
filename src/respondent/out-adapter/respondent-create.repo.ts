import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateRespondentOutPort,
  RespondentCreateOutPortInputDto,
  RespondentCreateOutPortOutputDto,
} from '../out-port/respondent-create.op';
import { Respondent } from '../respondent.entity';

export class CreateRespondentRepository implements CreateRespondentOutPort {
  constructor(
    @InjectRepository(Respondent)
    private readonly _respondentRepo: Repository<Respondent>,
  ) {}

  execute(
    params: RespondentCreateOutPortInputDto,
  ): Promise<RespondentCreateOutPortOutputDto> {
    return this._respondentRepo.save(params);
  }
}
