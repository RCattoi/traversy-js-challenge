function findFirstNonRepeatingCharacter(string) {
  const setString = new Set();
  const map1 = new Map();
  for (let i = 0; i < string.length; i++) {
    map1.get(string[i])
      ? map1.set(string[i], map1.get(string[i]) + 1)
      : map1.set(string[i], 1);
  }
  for (let i = 0; i < map1.size; i++) {
    if (map1.get(string[i]) === 1) return string[i];
  }
  return null;
}
console.log(findFirstNonRepeatingCharacter('aabccdeff')); // should return 'b
console.log(findFirstNonRepeatingCharacter('aabbcc')); // should return null
console.log(findFirstNonRepeatingCharacter('abcdef')); // should return 'a'
module.exports = findFirstNonRepeatingCharacter;
