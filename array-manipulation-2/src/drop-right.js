/* exported dropRight */
function dropRight(array, count) {
  var dropped = [];
  for (var i = 0; i < array.length - count; i++) {
    dropped.push(array[i]);
  }
  return dropped;
}
