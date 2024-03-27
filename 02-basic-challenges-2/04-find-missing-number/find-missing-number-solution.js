function findMissingNumber(arr) {
  // If the array is empty or undefined, return undefined
  if (arr.length === 0) {
    return 1;
  }
  
  if (arr.length === 1) {
    return arr[0] === 1 ? 2 : 1;
  }
  // Add 1 to the length of the array to account for the missing number
  const n = arr.length + 1;
  // Calculate the expected sum of the numbers from 1 to n
  const expectedSum = (n * (n + 1)) / 2;
  // Calculate the actual sum of the numbers in the array
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  // Return the difference between the expected sum and the actual sum
  return expectedSum - actualSum;
}

module.exports = findMissingNumber;
