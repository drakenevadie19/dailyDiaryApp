import DiaryDetailsComponent from "@/components/diary/details";

async function fetchDiaryDetails(getCurrentDiaryId) {
    const response = await fetch(`http:localhost:3000/api/diary/get-diary-detail?id=${getCurrentDiaryId}`, {
        method: "GET",
        cache: 'no-store'
    });

    const result = await response.json();

    if (result?.success) {
        return result.data;
    }
}

export default async function DiaryDetails({params}){
    console.log(params);
    const {details} = params;
    const diaryDetails = await fetchDiaryDetails(details);
    console.log(diaryDetails);
    return (
        <>
            <div>
                <DiaryDetailsComponent diaryDetails={diaryDetails} />
            </div>
        </>
    )
}