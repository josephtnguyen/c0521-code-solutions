/* exported lastChars */
function lastChars(length, string) {
  var last = '';
  for (var i = string.length - 1; i >= string.length - length; i--) {
    if (string[i]) {
      last = string[i] + last;
    }
  }
  return last;
}
