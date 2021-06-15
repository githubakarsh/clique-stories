import React from "react";
import AccordionComponent from '../components/molecule/accordion/Accordion';



export default {
    title: 'Molecule/Accordion',
    component: AccordionComponent,
}

const Template = (args) => <AccordionComponent {...args}/>;

export const AccordionExample = Template.bind({});
AccordionExample.args= {
    data : [{
        title : "Accordion title 1",
        content: "Any Content here 1"
    },
    {
        title : "Accordion title 2",
        content: "Any Content here 2"
    }
]
};
