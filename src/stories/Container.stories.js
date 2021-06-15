import Container from "../components/organisms/container/Container";
import Card from '../components/Card/Card';
import BackNextButton from '../components/Atom/backNext/BackNextButton';



export default {
    title: 'Organism/Container',
    component: Container,
}

const Template = (args) => <Container {...args}/>

export const ContainerExample = Template.bind({});
ContainerExample.args = {
    children : <Card>
        <BackNextButton />
        </Card>,
}