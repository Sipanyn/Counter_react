import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  return (
    <>
      <div className="main_container">
        <div className="container">
          <p onClick={plus_handler} className="plus_btn">
            +
          </p>
          <p className="number">{step}</p>
          <p onClick={sub_handler} className="sub_btn">
            -
          </p>
        </div>
        <p onClick={reset_handler} className="reset_btn">
          Reset
        </p>
      </div>
    </>
  );
  function plus_handler() {
    setStep(step + 1);
  }
  function sub_handler() {
    setStep(step - 1);
  }
  function reset_handler() {
    setStep(0);
  }
}
