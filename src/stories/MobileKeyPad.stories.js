import MobileKeyPad from '../components/MobileKeyPad/MobileKeyPad';

export default {
    title : 'Components/MobileKeyPad',
    component: MobileKeyPad,
}

const Template = ({...args}) => <MobileKeyPad {...args}/>;

export const MobileKeyPadExample = Template.bind({});
MobileKeyPadExample.args = {
    title: 'Mobile Key Pad'
}