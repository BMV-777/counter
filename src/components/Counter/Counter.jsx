import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  let date = new Date();
  date.setDate(date.getDate() + counter);
  return (
    <div className="counter">
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCounter((s) => s - step)}>-</button>
        <span>Counter: {counter}</span>
        <button onClick={() => setCounter((s) => s + step)}>+</button>
      </div>
      <p>
        <span>
          {counter === 0
            ? "To day is "
            : counter > 0
            ? `${counter} days from days`
            : `${Math.abs(counter)} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
};

export default Counter;
