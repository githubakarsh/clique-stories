import React from 'react';

import InputField from '../components/Inputfield';

export default {
    title: 'Atom/InputField',
    component: InputField,
  };


  const Template = (args) => <InputField {...args}/>

  export const TextInputField = Template.bind({});
    TextInputField.args = {
      type: 'text',
  }

  

