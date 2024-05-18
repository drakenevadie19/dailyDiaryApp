'use client';

export default function DiaryDetailsComponent({diaryDetails}) {
    return (
        <div>
            <h1>{diaryDetails?.title}</h1>
            <p>{diaryDetails?.description}</p>
            <h5>Created at {diaryDetails?.createdAt}</h5>
        </div>
    )
}