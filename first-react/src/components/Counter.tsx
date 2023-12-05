import { useState } from "react";

export default function Counter() {
  /* let count = 5; */
  const [count, setCount] = useState(0);

  const add = () => {
    /* count = count + 1; */
    setCount(count + 1);
    console.log(count);
  };

  const sub = () => {
    /* count = count - 1; */
    setCount(count - 1);
    console.log(count);
  };

  return (
    <>
      <button
        onClick={sub}
        className="transition ease-in-out px-4 py-2 text-4xl border rounded hover:bg-cyan-200"
      >
        -
      </button>
      <span className="mx-4 text-4xl font-medium">{count}</span>
      <button
        onClick={add}
        className="transition ease-in-out px-4 py-2 text-4xl border rounded hover:bg-cyan-200"
      >
        +
      </button>
    </>
  );
}
