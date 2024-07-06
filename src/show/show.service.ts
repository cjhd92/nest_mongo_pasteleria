import { Injectable } from '@nestjs/common';
import { CreateShowDto } from './dto/create-show.dto';
import { UpdateShowDto } from './dto/update-show.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Show } from './schemas/show.schema';
import { Model } from 'mongoose';

@Injectable()
export class ShowService {

  constructor(
    @InjectModel(Show.name) private showModel: Model<Show>
            ){}


  async create(show:any) {

    const createdShow = new this.showModel(show);


    return createdShow.save();
  }

  findAll() {
    return this.showModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} show`;
  }

  update(id: number, updateShowDto: UpdateShowDto) {
    return `This action updates a #${id} show`;
  }

  remove(id: number) {
    return `This action removes a #${id} show`;
  }
}
