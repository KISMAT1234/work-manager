import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    
    try{
      const {userId} = params
      const tasks = await Task.find({
        userId:userId
      });

      return NextResponse.json(tasks);
    }
    catch(err){
        console.log(err);
    }
}