import { useState } from "react";
import d4Dice from "./assets/d4-dice.webp";
import d6Dice from "./assets/d6-dice.png";
import d20Dice from "./assets/d20-dice.webp";
import "./App.css";

function App() {
  const [selectedDice, setSelectedDice] = useState("No dice selected");
  const [roll, setRoll] = useState(null);

  const handleClickD4 = () => {
    setSelectedDice("D4");
  };

  const handleClickD6 = () => {
    setSelectedDice("D6");
  };

  const handleClickD20 = () => {
    setSelectedDice("D20");
  };

  const handleDiceSelection = (selectedDice: string) => {
    if (selectedDice == "D4") {
      const diceRoll = Math.floor(Math.random() * 4) + 1;
      setRoll(diceRoll);
    } else if (selectedDice == "D6") {
      const diceRoll = Math.floor(Math.random() * 6) + 1;
      setRoll(diceRoll);
    } else if (selectedDice == "D20") {
      const diceRoll = Math.floor(Math.random() * 20) + 1;
      setRoll(diceRoll);
    } else {
      setRoll(null);
    }
  };

  return (
    <>
      <header className="flex justify-center content-center text-center flex-col mt-[5%] mb-[5%]">
        <h1 className="text-4xl underline mb-[2%]">Dice Roller</h1>
        <p className="text-xl">Selected dice: </p>
        <p className="text-xl text-lime-500">{selectedDice}</p>
      </header>
      <div className="flex justify-center content-center gap-8 flex-row">
        <img
          className="bg-neutral-900 rounded-3xl shadow-xl border-solid border-2 w-[12%] cursor-pointer transition ease-in-out hover:bg-neutral-950"
          src={d4Dice}
          onClick={handleClickD4}
          alt="An image of a d4 dice."
        />
        <img
          className="bg-neutral-900 rounded-3xl shadow-xl border-solid border-2 w-[12%] cursor-pointer transition ease-in-out hover:bg-neutral-950"
          src={d6Dice}
          onClick={handleClickD6}
          alt="An image of a d6 dice."
        />
        <img
          className="bg-neutral-900 rounded-3xl shadow-xl border-solid border-2 w-[12%] cursor-pointer transition ease-in-out hover:bg-neutral-950"
          src={d20Dice}
          onClick={handleClickD20}
          alt="An image of a d20 dice."
        />
      </div>
      <div className="flex justify-center content-center text-center flex-col mt-[3%]">
        <div>
          <button
            className="bg-zinc-800 py-2 px-3 rounded-xl shadow-xl border-solid border-2 text-2xl transition ease-in-out hover:bg-zinc-900 active:bg-zinc-950"
            onClick={() => {
              if (selectedDice !== "No dice selected!") {
                handleDiceSelection(selectedDice);
              } else {
                setRoll(null);
              }
            }}
          >
            Click to Roll!
          </button>
        </div>
        <div className="mt-[1%]">
          <p className="text-xl">You Rolled: </p>
          <p className="text-xl text-amber-300">{roll}</p>
        </div>
      </div>
    </>
  );
}

export default App;
