import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDb()
export function GET(request){

    const users = [{
        name:'kismat bohora',
        "age":20,
    }];
    return NextResponse.json(users);
}

export async function POST(request){
    try{
    const {name, email, password, about, profileURL} = await request.json();
    const user = new User({
        name, 
        email, 
        password, 
        about, 
        profileURL
    })       

    const createdUser = await user.save()
     const response = NextResponse.json(
        user,{
            status:201,
        }
    )
    return response;
   }catch(err){
     return NextResponse.json({
        message: "Failed to create user",
        status: false,
     })
   }
}

export function DELETE(request){
    console.log("User deleted")
}