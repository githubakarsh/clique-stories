import Card from "../components/Card/Card";
import DateOfBirth from '../components/dateOfBirth/DateOfBirth';


export default {
    title: 'Atom/DateOfBirth',
    component: DateOfBirth,
}

const Template = (args) => <DateOfBirth {...args}/>

export const DateOfBirthExample = Template.bind({});
DateOfBirthExample.args = {
}