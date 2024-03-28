const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const map = numbers.map((number) => {
  return number * 2;
});
console.log(map);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
const filter = numbers.filter((e) => {
  return e % 2 === 0;
});
console.log(filter);

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
const reduce = numbers.reduce((e, acc) => {
  return e + acc;
}, 0);
console.log(reduce);

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */
const forEach = numbers.forEach((e) => {
  console.log(`forEach: ${e}`);
});
/**
 * find: Returns the first array element that satisfies a specified condition.
 */ const find = numbers.find((e) => {
  return e === 1;
});
console.log(find);

/**
 * some: Checks if at least one array element satisfies a condition.
 */ const checks = numbers.some((e) => {
  return e > 100;
});
console.log(checks);

/**
 * every: Checks if all array elements satisfy a condition.
 */
const every = numbers.every((e) => {
  return e > 3;
});
console.log(every);
