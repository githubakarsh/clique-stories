import StepperComponent from "../components/stepper/Stepper";

export default {
    title: 'Molecule/Stepper',
    Component: StepperComponent,
};

const Template = (args) => <StepperComponent {...args}/>

export const ExampleStepper = Template.bind({});
ExampleStepper.args = {
    
}