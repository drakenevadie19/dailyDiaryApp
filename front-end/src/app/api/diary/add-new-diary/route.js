// If having multiple routes, add more folders in diary folder

import connectToDB from "@/database";
import Diary from "@/models/diary";
import { NextResponse } from "next/server";

// Create a post method
export async function POST(req) {
    try {
        await connectToDB();
        // Getting title and description from inputting => {title, description} --> extractData
        const extractData = await req.json();
        // Create new Diary model
        const newlyCreatedDiaryData = await Diary.create(extractData);
        // If the model is created successfully, the return success == true, else return false;
        if (newlyCreatedDiaryData) {
            console.log("Adding diary successfully");
            return NextResponse.json({
                success: true, 
                message: 'Diary added successfully'
            })
        } else {
            console.log("Failed adding diary");
            return NextResponse.json({
                success: false,
                message: "Failed to add new diary to database! Please try again"
            })
        }
    } catch (e) {
        console.log(e);
        console.log("Failed adding diary");
        return NextResponse.json({
            success: false,
            message: 'Something went wrong'
        })
    }
}