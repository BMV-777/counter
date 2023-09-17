import React, { useState } from "react";

const CounterInput = () => {
  const [counterInput, setCounterInput] = useState(0);
  const [step, setStep] = useState(1);

  function handelReset() {
    setCounterInput(0);
    setStep(1);
  }

  let date = new Date();
  date.setDate(date.getDate() + counterInput);
  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={() => setCounterInput((s) => s - 1)}>-</button>
        <input
          type="text"
          value={counterInput}
          onChange={(e) => setCounterInput(Number(e.target.value))}
        />
        <button onClick={() => setCounterInput((s) => s + 1)}>+</button>
      </div>
      <p>
        <span>
          {counterInput === 0
            ? "To day is "
            : counterInput > 0
            ? `${counterInput} days from days`
            : `${Math.abs(counterInput)} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {counterInput !== 0 || step !== 1 ? (
        <div>
          <button type="submit" onClick={handelReset}>
            RESET
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default CounterInput;
