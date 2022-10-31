import * as rawbody from 'raw-body';
import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, HttpStatus } from '@nestjs/common';
import { Hl7Service } from './hl7.service';
import { CreateHl7Dto } from './dto/create-hl7.dto';
import { UpdateHl7Dto } from './dto/update-hl7.dto';
import { Request, Response } from 'express';
import { Hl7 } from './entities/hl7.entity';
import { PlainBody } from './post.decorator';
import { request } from 'http';
@Controller('hl7')

export class Hl7Controller {
  constructor(private readonly hl7Service: Hl7Service) {}

  
  @Post()
  async index(@PlainBody() text: string) {
    console.log(text);
  }

  @Get()
  findAll() {
    return this.hl7Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hl7Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHl7Dto: UpdateHl7Dto) {
    return this.hl7Service.update(+id, updateHl7Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hl7Service.remove(+id);
  }
}