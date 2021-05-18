/* exported invert */
function invert(source) {
  var inverted = {};
  for (var key in source) {
    inverted[source[key]] = key;
  }
  return inverted;
}
