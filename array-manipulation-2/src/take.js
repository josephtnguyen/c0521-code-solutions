/* exported take */
function take(array, count) {
  if (array.length === 0) {
    return [];
  }
  var tooken = [];
  for (var i = 0; i < count; i++) {
    tooken.push(array[i]);
  }
  return tooken;
}
