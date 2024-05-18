import mongoose from "mongoose";

const diarySchema = new mongoose.Schema({
    title: String,
    description: String,
    image: [],
    createdAt: {
        type: Date,
        default: Date.now  // Automatically set the current date when the document is created
    }
}, {timestamps: true});

const Diary = mongoose.models.Diaries || mongoose.model("Diaries", diarySchema);

export default Diary;