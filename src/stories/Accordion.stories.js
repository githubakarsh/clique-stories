import React from "react";
import AccordionComponent from "../components/Accordion/Accordion";

export default {
    title: 'Molecule/Accordion',
    component: AccordionComponent,
}

const Template = (args) => <AccordionComponent {...args}/>;

export const AccordionExample = Template.bind({});
AccordionExample.args= {
    
};
