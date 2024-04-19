import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDb()
export async  function GET(request){
  try{
     let user = await User.find();
     return NextResponse.json(user);
  } catch(err){
     console.log(err);
  }
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