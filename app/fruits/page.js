import Link from 'next/link';
import MemoryUsage from '../MemoryUsage';

const fruits = [
  { id: 1, name: 'Banana', icon: '🍌' },
  { id: 2, name: 'Coconuts', icon: '🥥' },
  { id: 3, name: 'Papaya', icon: '🥔' },
  { id: 4, name: 'Mango', icon: '🥭' },
  { id: 5, name: 'Avocado', icon: '🥑' },
];

export default function FruitsPage() {
  return (
    <div>
      {fruits.map((fruit) => {
        return (
          <div
            key={`fruit-${fruit.id}`}
            data-test-id={`fruit-type-${fruit.name.toLocaleLowerCase()}`}
          >
            <Link href={`/fruits/${fruit.name.toLocaleLowerCase()}`}>
              <h2>{fruit.name}</h2>
              <p>{fruit.icon}</p>
            </Link>
          </div>
        );
      })}
      <MemoryUsage />
    </div>
  );
}
