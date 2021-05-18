/* exported flatten */
function flatten(array) {
  var flattened = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i][0]) {
      var j = 0;
      while (j < array[i].length) {
        flattened.push(array[i][j]);
        j++;
      }
    } else {
      flattened.push(array[i]);
    }
  }
  return flattened;
}
