/* exported takeRight */
function takeRight(array, count) {
  if (array.length === 0) {
    return [];
  }
  var tooken = [];
  for (var i = array.length - count; i < array.length; i++) {
    tooken.push(array[i]);
  }
  return tooken;
}
