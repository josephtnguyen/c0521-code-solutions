/* exported isUpperCased */
function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() !== word[i]) {
      return false;
    }
  }
  return true;
}
