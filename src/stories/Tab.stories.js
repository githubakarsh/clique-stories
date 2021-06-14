import TabComponent from "../components/Tab/TabComponent";

export default {
    title: 'Organism/Tab',
    Component: TabComponent,
};

const Template = (args) => <TabComponent {...args}/>

export const ExampleTab = Template.bind({});
ExampleTab.args = {
    namer: 'tabe'
}