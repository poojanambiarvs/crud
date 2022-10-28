import { PartialType } from '@nestjs/mapped-types';
import { CreateHl7Dto } from './create-hl7.dto';

export class UpdateHl7Dto extends PartialType(CreateHl7Dto) {}
