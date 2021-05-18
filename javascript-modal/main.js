var $openButton = document.querySelector('.open-button');
var $promptContainer = document.querySelector('.prompt-container');
var $noButton = document.querySelector('.no-button');

function handleOpenButton(event) {
  $promptContainer.className = 'prompt-container';
}

function handleNoButton(event) {
  $promptContainer.className = 'prompt-container hidden';
}

$openButton.addEventListener('click', handleOpenButton);
$noButton.addEventListener('click', handleNoButton);
