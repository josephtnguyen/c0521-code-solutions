/* exported omit */
function omit(source, keys) {
  var omitted = {};
  for (var key in source) {
    var keyPresent = false;
    for (var i = 0; i < keys.length; i++) {
      if (key === keys[i]) {
        keyPresent = true;
        break;
      }
    }
    if (!keyPresent) {
      omitted[key] = source[key];
    }
  }
  return omitted;
}
