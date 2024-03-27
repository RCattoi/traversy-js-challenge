function findMissingLetter(arr) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < arr.length; i++) {
    const li = alphabet.indexOf(arr[i].toLowerCase());
    const lip = alphabet.indexOf(arr[i + 1].toLowerCase());
    if (lip - li > 1) {
      if (arr[i].charCodeAt(0) >= 97) {
        return alphabet[li + 1].toLocaleLowerCase();
      } else {
        return alphabet[li + 1].toLocaleUpperCase();
      }
    }
  }
}
module.exports = findMissingLetter;
