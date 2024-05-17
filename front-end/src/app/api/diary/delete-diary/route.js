import connectToDB from "@/database";
import Diary from "@/models/diary";
import { NextResponse } from "next/server";


export async function DELETE(req) {
    try {
        await connectToDB();
        const {searchParams} = new URL(req.url);
        const currentDiaryId = searchParams.get('id');

        console.log(currentDiaryId);

        if (!currentDiaryId) {
            return NextResponse.json({
                success: false,
                message: "missing diary ID"
            })
        } 

        const deletedItem = await Diary.findByIdAndDelete(currentDiaryId);

        if (deletedItem) {
            return NextResponse.json({
                success: true,
                message: "Delete successfully"
            })
        } else {
            return NextResponse.json({
                success: false,
                message: "Delete failed"
            })
        }
    } catch (e) {
        console.log(e);
        return NextResponse.json({
            success: false, 
            message: "Something wrong"
        });
    }
}