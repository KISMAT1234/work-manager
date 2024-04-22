import { NextResponse } from "next/server";

export function GET(request){
    return NextResponse.json({
        message:"Hello kismat",
    })
}

export function POST(request){
    try{

    }
    catch(err){
        console.log(err);
    }
}