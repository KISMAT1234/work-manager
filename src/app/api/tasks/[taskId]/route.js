import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";

connectDb();

export async function GET(request, {params}){
    try{
        const {taskId} = params;
        console.log(taskId, 'params id');
        const tasks = await Task.findById(taskId);
        console.log(tasks,'tasks user')
        return NextResponse.json(tasks, {
            status: 200,
        });
        
    } 
    catch(err){
        console.log(err);
        return getResponseMessage("Error in getting data !!",404, false);
    }
}

export async function PUT(request, {params}){
   try{
    const {taskId} = params;
    const {title, content, userId} = await request.json();
    let  task = await Task.findById(taskId);

    task.title = title,
    task.content = content

    const updatedTask = await task.save();
    return NextResponse.json(updatedTask, {
        status: 201,
    });
   }
   catch(err){
    console.log(err)
   }
}



export async function DELETE(request, {params}){
    try{
       const {taskId} = params;
       await Task.deleteOne({_id:taskId});
       return NextResponse.json({
        message: "Task deleted successfully!!",
        success:true,
       })
    }
    catch(err){
        console.log(err);

    }
}