import { Module } from '@nestjs/common';


import { MongooseModule } from '@nestjs/mongoose';
import { ShowModule } from './show/show.module';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(),
            MongooseModule.forRoot(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_CLUSTER}.cuuq5et.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority&appName=Cluster0`), 
            ShowModule
            ],
  controllers: [],
  providers: [],
})
export class AppModule {}
