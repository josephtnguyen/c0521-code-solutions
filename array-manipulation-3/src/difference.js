/* exported difference */
function difference(first, second) {
  var unique = [];
  var secondCopy = second;
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        secondCopy.splice(j, 1);
        break;
      } else if (j === second.length - 1) {
        unique.push(first[i]);
      }
    }
  }
  for (var k = 0; k < secondCopy.length; k++) {
    unique.push(secondCopy[k]);
  }
  return unique;
}
