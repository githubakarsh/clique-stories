import React from 'react';
import BackNextButton from '../components/Atom/backNext/BackNextButton';

export default {
  title: 'Atom/BackNextButton',
  component: BackNextButton,
};

const Template = (args) => <BackNextButton {...args} />;

export const BackNextButtonExample = Template.bind({});
BackNextButtonExample.args = {
  onClickBack: function(e) {alert('back clicked')},
  onClickNext: function(e) {alert('next clicked')},
};

