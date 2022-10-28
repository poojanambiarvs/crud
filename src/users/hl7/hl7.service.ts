import { Injectable } from '@nestjs/common';
import { CreateHl7Dto } from './dto/create-hl7.dto';
import { UpdateHl7Dto } from './dto/update-hl7.dto';
import { Hl7 } from './entities/hl7.entity';

@Injectable()
export class Hl7Service {
 // private hl7 = [];
  private readonly hl7: Hl7[] = [];

  create(hl7: Hl7) {
    this.hl7.push(Hl7);
    return this.hl7;
  }


  findAll() {
    return `This action returns all hl7`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hl7`;
  }

  update(id: number, updateHl7Dto: UpdateHl7Dto) {
    return `This action updates a #${id} hl7`;
  }

  remove(id: number) {
    return `This action removes a #${id} hl7`;
  }
}
