function isPalindrome(word) {
  word = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  function reverseString(word) {
    let result = word.split('');
    let index = 0;
    for (var i = word.length - 1; i >= 0; i--) {
      const temp = result[index];
      result[index] = word[i];
      result[i] = temp;
      if (index + 1 === i || index === i) {
        break;
      }
      index++;
    }
    return result.join('');
  }

  const reversed = reverseString(word);
  console.log(reversed);
  return word.toLowerCase() === reversed.toLowerCase();
}
module.exports = isPalindrome;
