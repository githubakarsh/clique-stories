import React from 'react';

import { Button } from '../components/Button/Button';

export default {
  title: 'Atom/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  variant: 'primary',
  buttonName: 'Primary',
};

