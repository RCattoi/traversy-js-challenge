function findMissingNumber(arr) {
  if (!arr) return undefined;
  if (arr.length === 0) return 1;
  arr.sort((a, b) => a - b);
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i+1]-1) {
      return arr[i]+1;
    }
  }
}

module.exports = findMissingNumber;
