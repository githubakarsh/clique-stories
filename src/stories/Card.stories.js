import Card from "../components/Card/Card";


export default {
    title: 'Components/Card',
    component: Card,
}

const Template = (args) => <Card {...args}/>

export const CardExample = Template.bind({});
CardExample.args = {
    cardTitle: 'This is Card Title',
    children: 'This is card Content',
    cardFooter: 'This is Card Footer'
}