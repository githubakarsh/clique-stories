import React from 'react';
import InputField from '../components/Inputfield/Inputfield';

export default {
  title: 'Components/Textarea',
  component: InputField,
};

const Template = (args) => <InputField {...args} />;

const TextArea = Template.bind({});
TextArea.args = {
  type: 'textarea'
}