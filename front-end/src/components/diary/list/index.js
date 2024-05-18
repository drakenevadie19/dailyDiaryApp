'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DiaryListComponent({allDiaries}) {
    console.log(allDiaries);

    const router = useRouter();

    useEffect(() => {
        router.refresh();
    }, [])

    async function handleDeleting(getCurrentDiaryId) {
        const response = await fetch(`/api/diary/delete-diary?id=${getCurrentDiaryId}`, {
            method: "DELETE"
        });

        const data = await response.json();
        console.log(data);

        if (data?.success) router.refresh();
    }

    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                {
                    allDiaries && allDiaries.length > 0 
                    ? allDiaries.map((diary) => (
                        <div className="p-4 border flex flex-col gap-4 border-red-600" key={diary._id}>
                            <h1>{diary.title}</h1>
                            <h4>{diary.description}</h4>
                            <h6><i>Diary is created at {diary.createdAt.toLocaleString()}</i></h6>
                            <button
                                className="border border-red-500 p-4 bg-black text-white"
                                onClick={() => handleDeleting(diary._id)}
                                >
                                Delete this Diary
                            </button>
                            <button
                                className="border border-red-500 p-4 bg-black text-white"
                                onClick={() => router.push(`/diary-list/${diary._id}`)}
                                >
                                View diary detail
                            </button>                        
                        </div>
                    ))
                    : <h1>No diary from Database</h1>
                }
            </div>
        </>
    )
}