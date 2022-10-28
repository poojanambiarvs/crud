import { Module } from '@nestjs/common';
import { Hl7Service } from './hl7.service';
import { Hl7Controller } from './hl7.controller';

@Module({
  controllers: [Hl7Controller],
  providers: [Hl7Service]
})
export class Hl7Module {}
