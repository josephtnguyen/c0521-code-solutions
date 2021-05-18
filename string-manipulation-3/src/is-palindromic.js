/* exported isPalindromic */
function isPalindromic(string) {
  var noSpaces = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      noSpaces += string[i];
    }
  }
  var backCounter = noSpaces.length - 1;
  for (i = 0; i < noSpaces.length; i++) {
    if (i >= backCounter) {
      return true;
    }
    if (noSpaces[i] !== noSpaces[backCounter]) {
      return false;
    }
    backCounter--;
  }
}
