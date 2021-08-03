/* exported swapFront */

function swapFront(list) {
  if (!list.next) {
    return list;
  }
  const first = list.next;
  list.next = list.next.next;
  first.next = list;
  return first;
}
