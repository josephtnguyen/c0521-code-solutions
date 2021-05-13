/* exported isLowerCased */
function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() !== word[i]) {
      return false;
    }
  }
  return true;
}
