/* exported unique */
function unique(array) {
  var uniqueArray = [];
  for (var i = 0; i < array.length; i++) {
    if (uniqueArray.length === 0) {
      uniqueArray.push(array[i]);
    }
    for (var j = 0; j < uniqueArray.length; j++) {
      if (array[i] === uniqueArray[j]) {
        break;
      } else if (j === uniqueArray.length - 1) {
        uniqueArray.push(array[i]);
      }
    }
  }
  return uniqueArray;
}
