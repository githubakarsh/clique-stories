import React from 'react';
import Appbar from '../components/Appbar/Appbar';

export default {
  title: 'Components/Appbar',
  component: Appbar,
};

const Template = (args) => <Appbar {...args} />;

export const NamedHeader = Template.bind({});
NamedHeader.args = {
  name: 'App Header',
};

