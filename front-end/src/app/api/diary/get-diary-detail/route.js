import connectToDB from "@/database";
import Diary from "@/models/diary";
import { NextResponse } from "next/server";


export async function GET(req) {
    try {
        await connectToDB();
        const {searchParams} = new URL(req.url);
        const currentDiaryId = searchParams.get('id');
        if (!currentDiaryId) {
            return NextResponse.json({
                success: false, 
                message: "missing ID to get diary"
            });
        }

        const getDiaryDetails = await Diary.find({_id : currentDiaryId});
        if (getDiaryDetails && getDiaryDetails.length) {
            return NextResponse.json({
                success: true, 
                data: getDiaryDetails[0]
            });
        } else {
            return NextResponse.json({
                success: false, 
                message: "Failed! There might be some problem with the database!"
            });
        }
    } catch (e) {
        console.log(e);
        return NextResponse.json({
            success: false,
            message: "Something wrong!"
        })
    }
}