import React from "react";

const Live = () => {
  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-4">🔴 Live Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-zinc-800 p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold">Live Stream 1</h2>
          <p>Streaming Now...</p>
        </div>
        <div className="bg-zinc-800 p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold">Live Stream 2</h2>
          <p>Gaming Live 🎮</p>
        </div>
        <div className="bg-zinc-800 p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold">Live Stream 3</h2>
          <p>Tech Talks 💻</p>
        </div>
      </div>
    </div>
  );
};

export default Live;
