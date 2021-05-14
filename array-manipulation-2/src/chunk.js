/* exported chunk */
function chunk(array, size) {
  if (array.length === 0) {
    return [];
  }
  var arrays = [];
  var currentArray = [];
  for (var i = 0; i < array.length; i++) {
    if (currentArray.length === size) {
      arrays.push(currentArray);
      currentArray = [];
    }
    currentArray.push(array[i]);
  }
  arrays.push(currentArray);
  return arrays;
}
