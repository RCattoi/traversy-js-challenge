function fizzBuzzArray(number) {
  result = [];
  for (let i = 1; i < number + 1; i++) {
    const module3 = i % 3 === 0;
    const module5 = i % 5 === 0;
    const module35 = i % 3 === 0 && i % 5 === 0;
    console.log(module3, module5, module35);
    if (module35) {
      result.push('FizzBuzz');
    } else if (module3) {
      result.push('Fizz');
    } else if (module5) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }
  return result;
}

console.log(fizzBuzzArray(5));
module.exports = fizzBuzzArray;
