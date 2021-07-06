function map(array, transform) {
  const mapped = [];
  for (const element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}
