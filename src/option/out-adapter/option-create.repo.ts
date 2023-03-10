import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Option } from '../option.entity';
import {
  CreateOptionOutPort,
  OptionCreateOutPortInputDto,
  OptionCreateOutPortOutputDto,
} from '../out-port/option-create.op';

export class CreateOptionRepository implements CreateOptionOutPort {
  constructor(
    @InjectRepository(Option)
    private readonly _optionRepo: Repository<Option>,
  ) {}

  execute(
    params: OptionCreateOutPortInputDto,
  ): Promise<OptionCreateOutPortOutputDto> {
    return this._optionRepo.save(params);
  }
}
