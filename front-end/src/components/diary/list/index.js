'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DiaryListComponent({allDiaries}) {
    console.log(allDiaries);

    // const router = useRouter();

    // useEffect(() => {
    //     router.refresh();
    // }, [])

    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                {
                    allDiaries && allDiaries.length > 0 
                    ? allDiaries.map((diary) => (
                        <div className="p-4 border border-red-600">
                            <h1>{diary.title}</h1>
                            <h4>{diary.description}</h4>
                            <h6><i>Diary is created at {diary.createdAt.toLocaleString()}</i></h6>
                        </div>
                    ))
                    : <h1>No diary from Database</h1>
                }
            </div>
        </>
    )
}