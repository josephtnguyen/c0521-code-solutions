var $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', handleClick);

function handleClick(e) {
  console.log('target:', e.target);
  console.log('tag name:', e.target.tagName);
  if (e.target && e.target.matches('button')) {
    var $taskListItem = e.target.closest('.task-list-item');
    console.log('List Item:', $taskListItem);
    $taskListItem.remove();
  }
}
