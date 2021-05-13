/* exported isVowel */
function isVowel(char) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var j = 0; j < vowels.length; j++) {
    if (char.toLowerCase() === vowels[j]) {
      return true;
    }
  }
  return false;
}
