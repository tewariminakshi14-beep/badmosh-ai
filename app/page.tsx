"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<number | null>(null);

  const handleUpload = () => {
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      const fakePercentage = Math.floor(Math.random() * 100);
      setResult(fakePercentage);
      setLoading(false);
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center px-6 py-10">
      
      <div className="w-full flex justify-between items-center max-w-6xl">
        <h1 className="text-3xl font-bold tracking-wide">
          Badmosh AI – Know Ur Palwal Ka Ladka
        </h1>
        <p className="text-sm text-gray-400">
          Developed by Tiwari Daddy
        </p>
      </div>

      <div className="mt-12 text-center max-w-2xl">
        <p className="text-xl italic text-gray-300">
          "mujhe gareeb rehne ka fobia hai ~aniket bharadawaj (ani badmos)"

        </p>
      </div>

      <div className="mt-12 bg-gray-900 border border-gray-700 p-8 rounded-2xl shadow-2xl w-full max-w-xl text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Upload Badmosh Picture
        </h2>

        <button
          onClick={handleUpload}
          className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-xl font-semibold"
        >
          Analyze Badmosh
        </button>

        {loading && (
          <p className="mt-6 text-yellow-400 animate-pulse">
            Scanning Palwal System...
          </p>
        )}

        {result !== null && (
          <div className="mt-6">
            <p className="text-lg">
              Palwal Vibecoder Percentage

            </p>
            <p className="text-4xl font-bold text-green-400">
              {result}%
            </p>
          </div>
        )}
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl w-full">
        
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
          <h3 className="text-xl font-semibold mb-2">
            Instant AI Quality Check
          </h3>
          <p className="text-gray-400">
            1.Get percentage of ur chances to go to Singapore this holiday

          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
          <h3 className="text-xl font-semibold mb-2">
            Empire Mode Activated
          </h3>
          <p className="text-gray-400">
            2. Make a 10000 Cr empire
          </p>
        </div>

      </div>

    </main>
  );
}
