import { notFound } from 'next/navigation';
import MemoryUsage from '../../MemoryUsage';
import Fruit from './Fruit';

const fruits = [
  { id: 1, name: 'Banana', icon: '🍌' },
  { id: 2, name: 'Coconuts', icon: '🥥' },
  { id: 3, name: 'Papaya', icon: '🥔' },
  { id: 4, name: 'Mango', icon: '🥭' },
  { id: 5, name: 'Avocado', icon: '🥑' },
];

export const dynamic = 'force-dynamic';

export default function FruitPage({ params }) {
  const singleFruit = fruits.find((fruit) => {
    return fruit.name.toLowerCase() === params.fruitName;
  });

  if (!singleFruit) {
    notFound();
  }

  return (
    <>
      <Fruit fruit={singleFruit} />
      <MemoryUsage />
    </>
  );
}
