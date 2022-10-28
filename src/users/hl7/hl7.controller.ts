import * as rawbody from 'raw-body';
import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, HttpStatus } from '@nestjs/common';
import { Hl7Service } from './hl7.service';
import { CreateHl7Dto } from './dto/create-hl7.dto';
import { UpdateHl7Dto } from './dto/update-hl7.dto';
import { Request, Response } from 'express';
import { Hl7 } from './entities/hl7.entity';
@Controller('hl7')

export class Hl7Controller {
  constructor(private readonly hl7Service: Hl7Service) {}

  @Post()
   async index (@Body() data, @Req() req) {

    if (req.readable) {
            // body is ignored by NestJS -> get raw body from request
            const raw = await rawbody(req);
            const text = raw.toString().trim();
            console.log('body:', text);
      
          } else {
            // body is parsed by NestJS
            console.log('data:', data);
          }
      
          
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