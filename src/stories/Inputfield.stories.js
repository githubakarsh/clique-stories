import React from 'react';

import InputField from '../components/Inputfield';

export default {
    title: 'Components/InputField',
    component: InputField,
  };


  const Template = (args) => <InputField {...args}/>

  export const TextInputField = Template.bind({});
    TextInputField.args = {
      type: 'text',
  }

  export const EmailInputField = Template.bind({});
  EmailInputField.args = {
      type: 'email',
  }

  export const NumberInputField = Template.bind({});
  NumberInputField.args = {
      type: 'number',
      length: 10
  }

  export const DisabledInputField = Template.bind({});
  DisabledInputField.args = {
    type: 'text',
    disabled: true,
    value: 'John Smith'
  }

