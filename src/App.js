import { useState } from "react";
import Button from "./Button";
import StepMessage from "./StepMessage";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((prevStep) => prevStep - 1);
  }

  function handleNext() {
    if (step < 3) setStep((prevStep) => prevStep + 1);
  }

  return (
    <>
      <button
        className="close"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        X
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>
          {messages[step - 1]}
          </StepMessage>
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>

            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
              <span>🤓</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
