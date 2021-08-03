/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const first = queue.dequeue();
  const second = queue.dequeue();
  if (second === undefined) {
    return first;
  }
  const max = Math.max(first, second);
  const min = Math.min(first, second);
  queue.enqueue(max);
  return min;
}
