import './invoice.scss';
import { useState } from 'react';

import { formatter } from '../../utils/formatter';
const Invoice = ({
    invoiceNumber,
    itemsHeader,
    items,
    tax
}) => {
    const [total, caltotal] = useState(0);
    const [subTotal] = useState(() => {
        const itemsList = [];
        return items.map(item => {
            const amount = parseInt(item.quantity) * parseInt(item.price)
            itemsList.push(amount);
            if(itemsList.length === items.length){
                let tot = itemsList.reduce((sum, current) => {
                    return parseInt(sum)+parseInt(current);
                });
                caltotal(parseInt(tot)+parseInt(tax));
                return  tot;
            }
        }, 0)
    });
    return <div className="invoice-main">
        <div className="invoice-title">
            <label className="invoice-header">invoice 
                <span className="invoice-subheader">123456</span></label>
        </div>

        <div className="invoice-items-list">
            <table className="invoice-items-table">
                <thead>
                    <tr>{itemsHeader.map((item, index) => {
                        return <th key={index}>{item}</th>
                    })}</tr>
                </thead>
                <tbody>
                {items.map((list, index) => {
                    return <tr key={index}>
                        <td>{list.orderNumber}</td>
                        <td>{list.description}</td>
                        <td>{list.quantity}</td>
                        <td>{formatter(parseFloat(list.price))}</td>
                        <td>{formatter(parseInt(list.quantity) * parseInt(list.price))}</td>
                    </tr>;
                })}
                </tbody>
            </table>
        </div>

        <div className="invoice-subtotal">
            <table className="invoice-subtotal-table">
                <tbody>
                    <tr>
                        <td>Subtotal</td>
                        <td>{(subTotal)}</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>{formatter(tax)}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className="invoice-total">
            <label className="invoice-total--label">total : <span className="invoice-total--amount">{formatter(total)}</span></label>
        </div>
    </div>
}

Invoice.defaultProps = {
    tax: 100,
    invoiceNumber : '123456',
    itemsHeader : ['Order number','Description','Qty','Price', 'Amount'],
    items: [{ orderNumber: '123-456-789', description: 'Some random item 1', quantity: 1, price: 123},{ orderNumber: '789-456-123', description: 'Some random item 2', quantity: 2, price: 456}],

}

export default Invoice;
