import Snackbar from "../components/Snackbar/Snackbar";


export default {
    title: 'Components/Snackbar',
    component: Snackbar
}


const Template = (args) => <Snackbar {...args}/>

export const ExampleSnackbar = Template.bind({});
ExampleSnackbar.args = {
    children: 'This is Snackbar example',
    variant: 'primary'
}