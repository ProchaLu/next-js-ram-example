'use client';

import { useState } from 'react';

export default function GenerateButton() {
  const [color, setColor] = useState('#123fee');
  const [memoryUsage, setMemoryUsage] = useState(null);

  const fetchMemoryUsage = async () => {
    const response = await fetch('/api/memory');
    const data = await response.json();
    console.log(data);
    setMemoryUsage(data);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: color, padding: '1rem', margin: '1rem' }}
        onClick={async () => {
          setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
          await fetchMemoryUsage();
        }}
      >
        generate
      </button>

      {memoryUsage && (
        <div>
          <h2>Memory Usage:</h2>
          <p>RSS: {memoryUsage.rss}</p>
          <p>Heap Total: {memoryUsage.heapTotal}</p>
          <p>Heap Used: {memoryUsage.heapUsed}</p>
          <p>External: {memoryUsage.external}</p>
        </div>
      )}
    </div>
  );
}
