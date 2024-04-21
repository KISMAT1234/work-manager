// import { Task } from "@/models/task";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";

connectDb();

export async function GET(request){
     try{
       const tasks = await Task.find();
       return NextResponse.json(tasks, {
        status: 200,
       });
     }
     catch(err){
       console.log(err);
       return getResponseMessage("Error in getting data !!",404, false);
     }
}

export async function POST(request){
    try{
        const {title, content, userId} = await request.json();
         const task = new Task({
            title,
            content,
            userId,
         })
         const createdTask = await task.save();
         return NextResponse.json(createdTask, {
            status: 201,
         });
    }
    catch(err){
        console.log(err)
       return NextResponse.json({
        message: "Failed to create Task!!",
        success:false,
       })
    }
}