function reduce(array, reducer, initialValue) {
  let accumulated = initialValue;
  for (const element of array) {
    accumulated = reducer(accumulated, element);
  }
  return accumulated;
}
