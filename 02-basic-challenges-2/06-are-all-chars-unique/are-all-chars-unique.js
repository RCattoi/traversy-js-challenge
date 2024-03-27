function areAllCharactersUnique(str) {
  const set = new Set(str);
  return set.size === str.length;
}
console.log(areAllCharactersUnique('abcdefg')); // true
console.log(areAllCharactersUnique('abcdefgA')); // true
console.log(areAllCharactersUnique('programming')); // false
console.log(areAllCharactersUnique('')); // true
console.log(areAllCharactersUnique('a')); // true
module.exports = areAllCharactersUnique;
