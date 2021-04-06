export const formatter = (amount) => {
        let formatAmount = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
        })
    return formatAmount.format(amount);
}