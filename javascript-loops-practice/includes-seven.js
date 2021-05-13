/* exported includesSeven */
function includesSeven(array) {
  var sevenPresent = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      sevenPresent = true;
      return sevenPresent;
    }
  }
  return sevenPresent;
}
