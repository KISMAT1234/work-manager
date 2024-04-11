import { NextResponse } from "next/server";


export function POST(request){

}

export function DELETE(request, {params}){
    // console.log(params);
    const user = params.userId;
    console.log(user,'user id value')
    return NextResponse.json({
        message:"testing delete"
    })
}