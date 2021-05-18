/* exported union */
function union(first, second) {
  var combined = first;
  for (var i = 0; i < second.length; i++) {
    for (var j = 0; j < combined.length; j++) {
      if (second[i] === combined[j]) {
        break;
      } else if (j === combined.length - 1) {
        combined.push(second[i]);
      }
    }
  }
  return combined;
}
