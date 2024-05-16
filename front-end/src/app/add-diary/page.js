'use client'

import { useState } from "react";

const initialFormData = {
    title: '', 
    description: ''
}

export default function AddDiary() {

    const [diaryFormData, setDiaryFormData] = useState(initialFormData);

    console.log(diaryFormData);

    return (
        <>
            <div className="flex min-h-screen flex-col p-8">
                <h1 className="font-bold text-lg mb-3">Add a new Diary for healing your day</h1>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                        <label><b><i>Enter Diary title</i></b></label>
                        <input name="title" placeholder="Enter your diary title" className="border border-red-500 p-3 outline-none" value={diaryFormData['title']} onChange={(e) => setDiaryFormData({...diaryFormData, title: e.target.value})} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label><b><i>Enter Diary title</i></b></label>
                        <textarea name="description" placeholder="Enter your thought here" rows={6} className="border border-red-500 p-3 outline-none" value={diaryFormData['description']} onChange={(e) => setDiaryFormData({...diaryFormData, description: e.target.value})} />
                    </div>
                    <div>
                        <button className="border border-red-500 p-4 bg-black text-white" onClick={() => alert(`${diaryFormData['title']} ${diaryFormData['description']}`)}>Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}
