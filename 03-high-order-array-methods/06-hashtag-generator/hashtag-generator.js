function generateHashtag(text) {
  if (text === '' || text.length >= 139) return false;
  text = text.trim();
  console.log(text);
  const textArray = text.split(' ');
  const mappedArray = textArray.map((word) => {
    if (word === '') return '';
    else return word[0].toUpperCase() + word.slice(1);
  });
  return `#${mappedArray.join('')}`;
}

generateHashtag('    Hello     World   ');
// generateHashtag('JavaScript is awesome'); // "#JavaScriptIsAwesome"
// generateHashtag('hello world'); // "#HelloWorld"
// generateHashtag(
//   'This is a very very very very very very very very very very very very very very long input that should result in a false hashtag because it exceeds the character limit of 140'
// ); // false
generateHashtag('');
module.exports = generateHashtag;
