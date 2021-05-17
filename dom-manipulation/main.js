var clicks = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function clickHandler(event) {
  clicks++;
  $clickCount.textContent = 'Clicks: ' + clicks;
  if (clicks === 16) {
    $hotButton.className = 'hot-button nuclear';
  } else if (clicks === 13) {
    $hotButton.className = 'hot-button hot';
  } else if (clicks === 10) {
    $hotButton.className = 'hot-button warm';
  } else if (clicks === 7) {
    $hotButton.className = 'hot-button tepid';
  } else if (clicks === 4) {
    $hotButton.className = 'hot-button cool';
  }
}

$hotButton.addEventListener('click', clickHandler);
