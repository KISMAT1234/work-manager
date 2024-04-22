import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDb()
export async  function GET(request){
  try{
     let user = await User.find();
    //  console.log(user);
     return NextResponse.json(user);
  } catch(err){
     console.log(err);
  }
    return NextResponse.json(users);
}

export async function GET(request, {params}){
    try{
        const {userId} = params

        const user = await User.findById(userId)

        return NextResponse.json(user);
    }
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


export async function PUT(request, {params}){
    try{
        const {userId} = params;
        const {name, email, password, about, profileURL} = await request.json();
        const user = await User.findByIdAndUpdate(userId, {
            name, 
            email, 
            password, 
            about, 
            profileURL
        })
        return NextResponse.json({
            message: "User updated successfully",
            status: true,
        })
    }
    catch(err){
        return NextResponse.json({
            message: "Failed to update user",
            status: true,
        })
    }
}


export function DELETE(request, {params}){
    try{
        const {userId} = params;
        const user = User.deleteOne({_id: userId});
        return NextResponse.json({
            message: "User deleted successfully",
            status: true,
        })
    }

    catch(err){
        console.log(err);
        return NextResponse.json({
            message: "Failed to delete user",
            status: false,
        })
    }

}