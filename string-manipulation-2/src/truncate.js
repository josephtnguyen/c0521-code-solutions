/* exported truncate */
function truncate(length, string) {
  var truncated = '';
  for (var i = 0; i < length; i++) {
    if (string[i]) {
      truncated += string[i];
    }
  }
  return truncated + '...';
}
