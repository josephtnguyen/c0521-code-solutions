/* exported capitalizeWords */
function capitalizeWords(string) {
  var capitalized = '';
  var shouldCap = true;
  for (var i = 0; i < string.length; i++) {
    if (shouldCap) {
      capitalized += string[i].toUpperCase();
      shouldCap = false;
    } else if (string[i] === ' ') {
      capitalized += string[i];
      shouldCap = true;
    } else {
      capitalized += string[i].toLowerCase();
    }
  }
  return capitalized;
}
