import { NextResponse } from "next/server";
import { connectDB } from "../../lib/config/db";

import  {TodoModel } from "@/lib/models/todoModel"

//import {UtoModel} from "@/lib/models/UtoModel"

import UtoModel from '@/lib/models/UtoModel'; // Without curly braces

connectDB();

export async function GET(response){
    
    const todos=await UtoModel.find({});

    return NextResponse.json({todos:todos});


}

export async function POST(request){
    const {title,description}=await request.json();
    await UtoModel.create({
        title,description
    })
    return NextResponse.json({msg:"Created"});
}


export async function DELETE(request){
   
    const mongoId=await request.nextUrl.searchParams.get('mongoId');

    await UtoModel.findByIdAndDelete(mongoId);
    return NextResponse.json({msg:"deleted"});
}


export async function PUT(request){
   
    const mongoId=await request.nextUrl.searchParams.get('mongoId');

    await UtoModel.findByIdAndUpdate(mongoId,{
    $set:{
        isCompleted:true
  }  });
    return NextResponse.json({msg:"Updated"});
}