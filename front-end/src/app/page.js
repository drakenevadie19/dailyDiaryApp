"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col p-8">
      <h1 className="font-bold text-lg"> Daily Diary App</h1>
      <div>
        <button 
          className="border border-red-500 p-4 bg-black text-white"
          onClick={() => router.push('/diary-list')}
        >
          Visit all Diaries
        </button>
        <button 
          className="border border-red-500 p-4 bg-black text-white"
          onClick={() => router.push('/add-diary')}
        >
          Add new Diary for today
        </button>
      </div>
    </main>
  );
}
