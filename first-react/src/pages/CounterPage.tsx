import Counter from "../components/Counter";
import NameInput from "../components/NameInput";

export default function CounterPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Counter />
      <Counter />
      <Counter />
      <NameInput />
    </div>
  );
}
