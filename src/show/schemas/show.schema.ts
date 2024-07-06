import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class Show{

    @Prop({required:true})
    title:string;
    
    @Prop()
    description:string;
    
    @Prop()
    price:number;
    
    @Prop()
    image:string;
}


export const ShowSchema = SchemaFactory.createForClass(Show);