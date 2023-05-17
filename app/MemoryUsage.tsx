export default function MemoryUsage() {
  const memoryUsage = process.memoryUsage();
  const formattedUsage = {
    rss: `${(memoryUsage.rss / 1024 / 1024).toFixed(2)} MB`,
    heapTotal: `${(memoryUsage.heapTotal / 1024 / 1024).toFixed(2)} MB`,
    heapUsed: `${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`,
    external: `${(memoryUsage.external / 1024 / 1024).toFixed(2)} MB`,
  };

  return (
    <div>
      <h2>Memory Usage:</h2>
      <p>RSS: {formattedUsage.rss}</p>
      <p>Heap Total: {formattedUsage.heapTotal}</p>
      <p>Heap Used: {formattedUsage.heapUsed}</p>
      <p>External: {formattedUsage.external}</p>
    </div>
  );
}
