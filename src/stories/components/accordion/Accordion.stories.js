
import { Accordion } from './Accordion';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Molecule/Accordion',
  component: Accordion,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args


export const Primary = {
  args: {
   address : {
    addressLineOne : "Flat no 101",
    addressLineTwo : "Raj colony",
    street : "street name",
    district : "hyderabad",
    state : "telangana",
    pincode : '111111',
    country : 'india',
   }
  },
};

