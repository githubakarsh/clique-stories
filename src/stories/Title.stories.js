import Title from "../components/Title/Title";

export default {
    title: 'Components/Title',
    component: Title,
}


const Template = (args) => <Title {...args}/>

export const TitleExampleH1 = Template.bind({});
TitleExampleH1.args = {
    size: 'h1',
    children: 'this is h1 title'
}

export const TitleExampleH2 = Template.bind({});
TitleExampleH2.args = {
    size: 'h2',
    children: 'this is h2 title'
}

export const TitleExampleH3 = Template.bind({});
TitleExampleH3.args = {
    size: 'h3',
    children: 'this is h3 title'
}

export const TitleExampleH4 = Template.bind({});
TitleExampleH4.args = {
    size: 'h4',
    children: 'this is h4 title'
}

export const TitleExampleH5 = Template.bind({});
TitleExampleH5.args = {
    size: 'h5',
    children: 'this is h5 title'
}

export const TitleExampleH6 = Template.bind({});
TitleExampleH6.args = {
    size: 'h6',
    children: 'this is h6 title'
}

