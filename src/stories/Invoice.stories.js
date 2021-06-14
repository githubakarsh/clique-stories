import Invoice from '../components/Invoice/Invoice';


export default {
    title: "Pages/Invoice",
    Component : Invoice,
}

const Template = ({...args}) => <Invoice  {...args}/>;

export const InvoiceExample = Template.bind({});

InvoiceExample.args = {
    invoiceNumber : "123456",
}

