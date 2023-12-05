import { useState } from "react";

export default function Calculator() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [sum, setSum] = useState(0);

  const add = () => {
    setSum(Number(number1) + Number(number2));
  };

  const sub = () => {
    setSum(Number(number1) - Number(number2));
  };

  const mul = () => {
    setSum(Number(number1) * Number(number2));
  };

  const div = () => {
    setSum(Number(number1) / Number(number2));
  };
  return (
    <>
      <div className="max-w-sm">
        <div className="flex gap-4">
          <label className="w-full flex flex-col">
            <span className="font-medium text-base">Number 1</span>
            <input
              value={number1}
              onChange={(e) => setNumber1(e.target.value)}
              className="transition-all border px-4 py-2 rounded outline-0 ring-0 ring-blue-200 focus:border-blue-500 focus:ring-2"
              type="text"
            />
          </label>
          <label className="w-full flex flex-col">
            <span className="font-medium text-base">Number 2</span>
            <input
              value={number2}
              onChange={(e) => setNumber2(e.target.value)}
              className="transition-all border px-4 py-2 rounded outline-0 ring-0 ring-blue-200 focus:border-blue-500 focus:ring-2"
              type="text"
            />
          </label>
        </div>
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={add}
            className="transition ease-in-out px-4 py-2 text-4xl border rounded hover:bg-cyan-200"
          >
            +
          </button>
          <button
            onClick={sub}
            className="transition ease-in-out px-4 py-2 text-4xl border rounded hover:bg-cyan-200"
          >
            -
          </button>
          <button
            onClick={mul}
            className="transition ease-in-out px-4 py-2 text-4xl border rounded hover:bg-cyan-200"
          >
            *
          </button>
          <button
            onClick={div}
            className="transition ease-in-out px-4 py-2 text-4xl border rounded hover:bg-cyan-200"
          >
            /
          </button>
        </div>

        <div className="mt-4 flex justify-center items-center text-4xl font-bold">
          {sum}
        </div>
      </div>
    </>
  );
}
