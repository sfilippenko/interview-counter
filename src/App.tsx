import { useState } from "react";
import { Button } from "./Button";

export const App = () => {
  const [step, setStep] = useState(1);
  const [counterValue, setCounterValue] = useState(0);
  return (
    <div className="App">
      <div>Counter value {counterValue}</div>
      <span>Step</span>
      <input value={step} type="range" min="1" max="10" />
      <span>{step}</span>
      <br />
      <Button>Increment</Button>
      <Button>Decrement</Button>
    </div>
  );
};
