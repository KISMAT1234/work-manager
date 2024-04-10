import { NextResponse } from "next/server";

export function GET(request){

    const users = [{
        name:'kismat bohora',
        "age":20,
    }];
    return NextResponse.json(users);
}

export function POST(request){
    return NextResponse.json(req);
}

export function DELETE(request){
    console.log("User deleted")
}