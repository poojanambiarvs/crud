import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageDto } from './users/dto/message.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
