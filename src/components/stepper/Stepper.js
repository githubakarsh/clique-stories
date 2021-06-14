import { Stepper } from "react-form-stepper";
import {useState} from "react";

const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }];
const StepperComponent = () => {
    const [activeStep, setActiveStep] = useState(0);
    const handleSteps = () => {
        if(activeStep < steps.length) {
            setActiveStep(activeStep + 1);
        }
    }
  return (
    <div>
      <Stepper
        steps={steps}
        activeStep={activeStep}
        onClick={() => handleSteps()}
      />
    </div>
  );
};

export default StepperComponent;
