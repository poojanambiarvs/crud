import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Hl7Module } from './hl7/hl7.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [Hl7Module]
})
export class UsersModule {}
