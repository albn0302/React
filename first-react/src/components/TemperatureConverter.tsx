import { useState } from "react";

export default function TemperatureConverter() {
  const [inputTemp, setInputTemp] = useState(0);
  const [convertedTemp, setConvertedTemp] = useState(0);

  const handleTempChange = (e) => {
    const newTemp = e.target.value;
    setInputTemp(newTemp); // Adds the value of the input to the "newTemp" variable

    const celsius = parseFloat(newTemp); // Converts given number to a floating point number
    const fahrenheit = (celsius * 9) / 5 + 32; // °F = °C * 9/5 + 32 | This does the calculations for converting celcius to fahrenheit
    setConvertedTemp(fahrenheit.toFixed(2)); // Limits decimal number
  };

  return (
    <div>
      <div className="flex justify-center items-center mt-[15%]">
        <div className="flex flex-col text-center">
          <h1 className="text-4xl">Temperature Converter</h1>
          <div className="mt-[10%]">
            <input
              className="rounded-md border-2 border-zinc-400 bg-zinc-300 dark:bg-zinc-700 dark:border-zinc-600"
              type="text"
              value={inputTemp}
              onChange={handleTempChange}
              placeholder="Give a degree in °C"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-center text-lg mt-[2%]">
        <p className="rounded-md border-2 border-zinc-400 p-1 px-2 bg-zinc-300 dark:bg-zinc-700 dark:border-zinc-600">
          {convertedTemp} °F
        </p>
      </div>
    </div>
  );
}
