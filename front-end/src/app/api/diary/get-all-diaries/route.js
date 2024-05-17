import connectToDB from "@/database";
import Diary from "@/models/diary";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        await connectToDB();
        const extractAllDiaries = await Diary.find({});
        if (extractAllDiaries && extractAllDiaries.length) {
            return NextResponse.json({
                success: true,
                data: extractAllDiaries
            })
        } else {
            return NextResponse.json({
                success: false, 
                message: "Fail to get all Diaries! Check the database or connection to database!"
            })
        }
    } catch (e) {
        console.log(e);
        return NextResponse.json({
            success: false,
            message: "Something is wrong"
        })
    }
}