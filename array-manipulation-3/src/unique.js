/* exported unique */
function unique(array) {
  var uniqueArray = [];

  if (array.length !== 0) {
    uniqueArray.push(array[0]);
  }

  for (var i = 1; i < array.length; i++) {
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
