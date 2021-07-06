function filter(array, predicate) {
  const filtered = [];
  for (const instance of array) {
    if (predicate(instance)) {
      filtered.push(instance);
    }
  }
  return filtered;
}
