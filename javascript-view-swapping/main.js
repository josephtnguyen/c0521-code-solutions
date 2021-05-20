var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', handleClick);

function handleClick(event) {
  if (!event.target.matches('.tab')) {
    return;
  }

  var toView = event.target.getAttribute('data-view');
  for (var i = 0; i < $views.length; i++) {
    if ($views[i].getAttribute('data-view') === toView) {
      $views[i].classList.remove('hidden');
    } else {
      $views[i].classList.add('hidden');
    }
  }

  for (i = 0; i < $tabs.length; i++) {
    if (event.target === $tabs[i]) {
      $tabs[i].classList.add('active');
    } else {
      $tabs[i].classList.remove('active');
    }
  }
}
