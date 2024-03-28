function sumOfEvenSquares(arr) {
  if (arr.length === 0) return 0;

  const filterArr = arr.filter((e) => {
    return e % 2 === 0;
  });

  const reduce = filterArr.reduce((acc, e) => {
    return e ** 2 + acc;
  }, 0);

  return reduce;
}

console.log(sumOfEvenSquares([1, 2, 3, 4, 5])); // 20 (2^2 + 4^2)
console.log(sumOfEvenSquares([-1, 0, 1, 2, 3, 4])); // 20 (0^2 + 2^2 + 4^2)
console.log(sumOfEvenSquares([])); // 0
module.exports = sumOfEvenSquares;
