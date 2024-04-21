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

export async function POST(){

}

export async function PUT(){

}

export async function DELETE(){

}