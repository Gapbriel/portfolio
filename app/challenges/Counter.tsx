"use client";

import { useState } from "react";

export default function Counter() {
  // Empezá a codear tu lógica acá 👇

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="border rounded-md p-6 text-center bg-[var(--background)] text-[var(--foreground)] shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Counter Component</h2>
      <p className="text-gray-500 dark:text-gray-400">Start coding here 🚀</p>

      <p className="text-gray-500 dark:text-gray-400 text-2xl font-bold mb-4">
        {count}
      </p>

      <div className="flex gap-4 justify-center mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleIncrement}
        >
          Increment
        </button>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={handleDecrement}
        >
          Decrement
        </button>

        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-md"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
