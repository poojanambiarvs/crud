import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { Hl7Module } from './users/hl7/hl7.module';
import { Hl7Service } from './users/hl7/hl7.service';
import { Hl7Controller } from './users/hl7/hl7.controller';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [UsersModule, Hl7Module]})
  
  @Module({

    imports:[
    MongooseModule.forRoot('mongodb+srv://poojaanoop:xfEqy4R96I8tkDNw@atlascluster.dc5ceym.mongodb.net/?retryWrites=true&w=majority')
      ],
      
  controllers: [AppController, Hl7Controller],
  providers: [AppService, Hl7Service],
})
export class AppModule {}
