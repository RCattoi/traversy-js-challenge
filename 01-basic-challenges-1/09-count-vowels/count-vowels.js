function countVowels(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
