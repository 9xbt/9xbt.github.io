function convertToOldCurrency(decimalPounds) {
    const pounds = Math.floor(decimalPounds);
    const fractionalPounds = decimalPounds - pounds;
    const shillings = Math.floor(fractionalPounds * 20);
    const pence = Math.round((fractionalPounds * 240) - (shillings * 12));
    return `${decimalPounds}£ is equal to ${pounds}£ ${shillings}s ${pence}d`;
}

document.getElementById('input').addEventListener('input', function() {
    const decimalPounds = parseFloat(this.value);
    if (!isNaN(decimalPounds)) {
        const result = convertToOldCurrency(decimalPounds);
        document.getElementById('output').textContent = result;
    } else {
        document.getElementById('output').textContent = '0£ is equal to 0£ 0s 0d';
    }
});