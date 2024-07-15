import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class Show{

    @Prop({required:true})
    categoria:string;

    @Prop({required:true})
    title:string;
    
    @Prop({required:false})
    description:string;
    
    @Prop({required:true})
    price:number;
    
  
}


export const ShowSchema = SchemaFactory.createForClass(Show);