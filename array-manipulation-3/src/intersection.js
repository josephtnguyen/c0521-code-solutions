/* exported intersection */
function intersection(first, second) {
  var inBoth = [];
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        inBoth.push(first[i]);
        break;
      }
    }
  }
  return inBoth;
}
