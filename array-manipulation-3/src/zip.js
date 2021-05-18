/* exported zip */
function zip(first, second) {
  var zipped = [];
  var i = 0;
  while (i < first.length && i < second.length) {
    zipped.push([first[i], second[i]]);
    i++;
  }
  return zipped;
}
