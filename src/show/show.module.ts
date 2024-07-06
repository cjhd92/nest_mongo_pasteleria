import { Module } from '@nestjs/common';
import { ShowService } from './show.service';
import { ShowController } from './show.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Show, ShowSchema } from './schemas/show.schema';

@Module({
  imports:[MongooseModule.forFeature([
    {
      name:Show.name,
      schema:ShowSchema,
    }
  ])],
  controllers: [ShowController],
  providers: [ShowService],
})
export class ShowModule {}
