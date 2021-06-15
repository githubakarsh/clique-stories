import React from 'react';
import { Stepper, Step } from "react-form-stepper";

import { useState } from "react";

const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }];
const StepperComponent = () => {
  const [activeStep, setActiveStep] = useState(0);
  const handleSteps = () => {
    if (activeStep < steps.length) {
      setActiveStep(activeStep + 1);
    }
  };
  return (
    <div>
      <Stepper
        activeStep={activeStep}
        onClick={() => handleSteps()}>
            {steps.map(list => {
                return <Step label={list.label} />
            })}
        {/* <Step label="Children Step 1" />
        <Step label="Children Step 2" />
        <Step label="Children Step 3" /> */}
      </Stepper>
    </div>
  );
};

export default StepperComponent;
