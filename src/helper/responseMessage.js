import { NextResponse } from "next/server"

export const getResponseMessage  = (message, statusCode) =>{
    return NextResponse.json({
        message: message,
        success: statusCode
    },
    {
        status: statusCode,
    });


}