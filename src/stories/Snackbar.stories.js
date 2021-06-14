import Snackbar from "../components/Snackbar/Snackbar";


export default {
    title: 'Molecule/Snackbar',
    component: Snackbar
}


const Template = (args) => <Snackbar {...args}/>

export const PrimarySnackbar = Template.bind({});

PrimarySnackbar.args = {
    children: 'This is Snackbar example',
    variant: 'primary'
}

