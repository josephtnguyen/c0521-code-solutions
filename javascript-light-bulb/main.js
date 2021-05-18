var $body = document.querySelector('body');
var $button = document.querySelector('button');

function handleButtonPress(event) {
  if ($body.className === 'off') {
    $body.className = 'on';
    $button.className = 'on';
  } else {
    $body.className = 'off';
    $button.className = 'off';
  }
}

$button.addEventListener('click', handleButtonPress);
