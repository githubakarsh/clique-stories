import React from 'react';

import { Button } from '../components/Button/Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const ButtonExample = Template.bind({});
ButtonExample.args = {
  variant: 'primary',
  buttonName: 'Button',
};
