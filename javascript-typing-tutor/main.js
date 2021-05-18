var $keystrokes = document.querySelectorAll('span');
var $accuracy = document.querySelector('.accuracy');
var $playAgain = document.querySelector('.play-again');
var $yes = document.querySelector('#yes');
var $no = document.querySelector('#no');
var currentIndex = 0;
var attempts = 0;
var mistakes = 0;

function handleKeystroke(event) {
  attempts++;
  if (event.key === $keystrokes[currentIndex].textContent) {
    $keystrokes[currentIndex].className = 'correct';
    currentIndex++;
    if (currentIndex === $keystrokes.length) {
      $accuracy.textContent = 'Accuracy: ' + Math.round(100 * (1 - (mistakes / attempts))) + '%';
      $accuracy.className = 'accuracy';
      $playAgain.className = 'play-again';
    } else {
      $keystrokes[currentIndex].className = 'current';
    }
  } else {
    $keystrokes[currentIndex].className += ' incorrect';
    mistakes++;
  }
}

function handleYes(event) {
  for (var i = 0; i < $keystrokes.length; i++) {
    $keystrokes[i].className = '';
  }
  $keystrokes[0].className = 'current';
  $accuracy.className = 'accuracy hidden';
  $playAgain.className = 'play-again hidden';
  currentIndex = 0;
  attempts = 0;
  mistakes = 0;
}

function handleNo(event) {
  $playAgain.className = 'play-again hidden';
}

document.addEventListener('keydown', handleKeystroke);
$yes.addEventListener('click', handleYes);
$no.addEventListener('click', handleNo);
