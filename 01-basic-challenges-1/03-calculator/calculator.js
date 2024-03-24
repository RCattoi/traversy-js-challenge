function calculator(numb1, num2, operand) {
  let result = 0;
  switch (operand) {
    case '+':
      result = numb1 + num2;
      break;
    case '-':
      result = numb1 - num2;
      break;
    case '*':
      result = numb1 * num2;
      break;
    case '/':
      result = numb1 / num2;
      break;
    default:
      throw new Error('Invalid operand');
  }
  return result;
}
console.log(calculator(1, 3, '+-'));
module.exports = calculator;
