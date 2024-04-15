import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";

connectDb
export function GET(request){

    const users = [{
        name:'kismat bohora',
        "age":20,
    }];
    return NextResponse.json(users);
}

export async function POST(request){
    const value = await request.json();
    console.log(value);
     return NextResponse.json({
        message:"user created"
    })
}

export function DELETE(request){
    console.log("User deleted")
}