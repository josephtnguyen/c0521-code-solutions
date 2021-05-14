/* exported numVowels */
function numVowels(string) {
  var count = 0;
  var vowels = 'aeiou';
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (vowels[j] === string[i].toLowerCase()) {
        count++;
      }
    }
  }
  return count;
}
