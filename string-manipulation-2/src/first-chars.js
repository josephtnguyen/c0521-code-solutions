/* exported firstChars */
function firstChars(length, string) {
  var first = '';
  for (var i = 0; i < length; i++) {
    if (string[i]) {
      first += string[i];
    }
  }
  return first;
}
