// "use client";

import DiaryListComponent from "@/components/diary/list"
// import { useRouter } from "next/navigation";

async function fetchAllDiaries(){
    const response = await fetch(`http://localhost:3000/api/diary/get-all-diaries`, {
        method: 'GET',
        cache: 'no-store'
    });

    const result = await response.json();
    if (result?.success) {
        console.log("Getting all diaries successfully");
        return result.data;
    }
}

export default async function DiaryList() {

    const getAllDiaries = await fetchAllDiaries();
    console.log(getAllDiaries);

    // const router = useRouter();

    return (
        <>
            <div className="flex min-h-screen flex-col p-8">
                <h1 className="font-bold text-lg mb-5">Your journey of healing</h1>
                <DiaryListComponent allDiaries={getAllDiaries}/>
                {/* <button onClick={() => router.push('/add-diary')}>Back to Add</button> */}
            </div>
        </>
    )
}