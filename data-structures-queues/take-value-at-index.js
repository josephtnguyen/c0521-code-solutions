/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let counter = index;
  let front = queue.dequeue();
  while (counter > 0) {
    front = queue.dequeue(queue.enqueue(front));
    counter--;
  }
  return front;
}
