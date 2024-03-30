function validAnagrams(word1, word2) {
  const createObj = (word) => {
    const object = {};
    for (let i = 0; i < word.length; i++) {
      if (object[word[i]]) {
        object[word[i]] += 1;
      } else {
        object[word[i]] = 1;
      }
    }
    return object;
  };

  const mappedW1 = createObj(word1);
  const mappedW2 = createObj(word2);
  const equalkeys =
    JSON.stringify(Object.keys(mappedW1).sort()) ===
    JSON.stringify(Object.keys(mappedW2).sort());
  const equalData =
    JSON.stringify(Object.values(mappedW1).sort()) ===
    JSON.stringify(Object.values(mappedW2).sort());
  return equalkeys && equalData;
}

module.exports = validAnagrams;
