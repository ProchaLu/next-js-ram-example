'use client';

export default function SingleFruit(props) {
  return (
    <div>
      <h2>{props.fruit.name}</h2>
      <p>{props.fruit.icon}</p>
    </div>
  );
}
