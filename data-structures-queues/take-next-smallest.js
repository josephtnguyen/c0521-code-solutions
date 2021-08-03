/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let front = queue.dequeue();
  if (queue.peek() === undefined) {
    return front;
  }
  let next = queue.peek();
  while (next < front) {
    queue.enqueue(front);
    front = queue.dequeue();
    next = queue.peek();
  }
  return front;
}
