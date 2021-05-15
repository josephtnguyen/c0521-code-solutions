/* exported pick */
function pick(source, keys) {
  var picked = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      picked[keys[i]] = source[keys[i]];
    }
  }
  return picked;
}
