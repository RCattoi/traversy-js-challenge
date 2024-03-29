function calculateTotalSalesWithTax(arrData, tax) {
  const sumprice = arrData.reduce((acc, e, i) => {
    return e.price * e.quantity + acc;
  }, 0);
  return sumprice + sumprice * (tax / 100);
}

calculateTotalSalesWithTax(
  [
    { name: 'Apple', price: 0.5, quantity: 10 },
    { name: 'Banana', price: 0.3, quantity: 20 },
    { name: 'Orange', price: 0.6, quantity: 15 },
  ],
  8
); // 21.6 (20 + 8% tax)

calculateTotalSalesWithTax(
  [
    { name: 'Chocolate', price: 2.5, quantity: 5 },
    { name: 'Chips', price: 1.2, quantity: 10 },
    { name: 'Soda', price: 1.0, quantity: 8 },
    { name: 'Candy', price: 0.5, quantity: 15 },
  ],
  5
); // 42 (40 + 5% tax)
module.exports = calculateTotalSalesWithTax;
