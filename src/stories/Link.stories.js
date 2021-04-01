import Link from "../components/Link/Link";


export default {
    title: 'Components/Link',
    component: Link
}


const Template = (args) => <Link {...args}/>

export const ExampleLink = Template.bind({});
ExampleLink.args = {
    children: 'Go to website',
    variant: 'primary',
    href:"#"
}