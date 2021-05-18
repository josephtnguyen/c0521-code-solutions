/* exported reverseWords */
function reverseWords(string) {
  var reversedString = '';
  var reversedWord = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      reversedWord = string[i] + reversedWord;
    } else {
      reversedString += reversedWord + ' ';
      reversedWord = '';
    }
  }
  reversedString += reversedWord;
  return reversedString;
}
