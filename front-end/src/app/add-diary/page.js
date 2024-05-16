'use client' 

export default function AddDiary() {
    return (
        <>
            <div>
                <h1 className="font-bold text-lg">Add a new Diary for healing your day</h1>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                        <label><b><i>Enter Diary title</i></b></label>
                        <input name="title" placeholder="Enter your diary title" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label><b><i>Enter Diary title</i></b></label>
                        <textarea name="title" placeholder="Enter your thought here" />
                    </div>
                    <div>
                        <button>Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}