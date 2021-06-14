import Link from "../components/Link/Link";


export default {
    title: 'Atom/Link',
    component: Link
}


const Template = (args) => <Link {...args}/>

export const ExampleLink = Template.bind({});
ExampleLink.args = {
    children: 'Go to website',
    variant: 'primary',
    href:"#"
}