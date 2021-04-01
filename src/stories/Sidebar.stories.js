import Sidebar from "../components/Sidebar/Sidebar";
import React from 'react';

export default {
    title: 'Components/Sidebar',
    component: Sidebar,
}


const Template = (args) => <Sidebar {...args}/>;

export const ExampleSidebar = Template.bind({});
ExampleSidebar.args = {

}