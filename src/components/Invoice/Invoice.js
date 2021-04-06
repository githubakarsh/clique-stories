import './invoice.scss';

const Invoice = ({
    invoiceNumber,
}) => {
    return <div className="invoice-main">
        <div className="invoice-title">
            <label className="invoice-header">invoice 
                <span className="invoice-subheader">123456</span></label>
        </div>

        <div className="invoice-items-list">
            <table className="invoice-items-table">
                <thead>
                <tr>
                    <th>Order number</th>
                    <th>Description</th>
                    <th>Qty</th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>123-456-789</td>
                    <td>Some random item 1</td>
                    <td>1</td>
                    <td>£123</td>
                </tr>
                <tr>
                    <td>789-456-123</td>
                    <td>Some random item 2</td>
                    <td>1</td>
                    <td>£456</td>
                </tr>
                </tbody>
            </table>
        </div>

        <div className="invoice-subtotal">
            <table className="invoice-subtotal-table">
                <tbody>
                    <tr>
                        <td>Subtotal</td>
                        <td>£579</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>£100</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className="invoice-total">
            <label className="invoice-total--label">total : <span className="invoice-total--amount">£679</span></label>
        </div>
    </div>
}

export default Invoice;
