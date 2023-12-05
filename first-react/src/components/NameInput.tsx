import { useState } from "react";

export default function NameInput() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="transition-all border px-4 py-2 rounded outline-0 ring-0 ring-blue-200 focus:border-blue-500 focus:ring-2"
        type="text"
      />
      <h3 className="text-4xl font-bold">Hello, {name}</h3>
    </>
  );
}
