import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateShowDto } from './dto/create-show.dto';
import { UpdateShowDto } from './dto/update-show.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Show } from './schemas/show.schema';
import { Model } from 'mongoose';
import { log } from 'console';

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

  async update(id: string, updateShowDto: UpdateShowDto) {
    
    
    const existingShow = await this.showModel.findById(id).exec();

   
    if(! existingShow){
      throw new NotFoundException(`Show with ID ${id} not found`)
    }
    

    Object.assign(existingShow,updateShowDto);

    try{
      return await existingShow.save();
    }
    catch(error){
      throw new Error(`Error updating show: ${error.message}`)
    }
  }

  async remove(id: string): Promise<void> {
    const result = await this.showModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`Show with ID "${id}" not found`);
    }
  }
  }

