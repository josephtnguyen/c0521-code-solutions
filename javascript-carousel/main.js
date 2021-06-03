var currentIndex = 0;

var $imageList = document.querySelectorAll('.portrait');
var $dotBar = document.querySelector('.dot-bar');
var $dotList = document.querySelectorAll('.dot');

var $leftButton = document.querySelector('.scroll-left');
var $rightButton = document.querySelector('.scroll-right');

var autoScroll = setInterval(transitionRight, 3000);

$leftButton.addEventListener('click', transitionLeft);
$rightButton.addEventListener('click', transitionRight);
$dotBar.addEventListener('click', handleNav);

function transitionLeft(event) {
  currentIndex--;
  if (currentIndex === -1) {
    currentIndex = 4;
  }

  showImage(currentIndex);
}

function transitionRight(event) {
  currentIndex++;
  if (currentIndex === 5) {
    currentIndex = 0;
  }

  showImage(currentIndex);
}

function handleNav(event) {
  for (var i = 0; i < $dotList.length; i++) {
    if (event.target === $dotList[i]) {
      currentIndex = i;
      showImage(currentIndex);
      break;
    }
  }
}

function showImage(index) {
  for (var i = 0; i < $imageList.length; i++) {
    if (i !== index) {
      $imageList[i].classList.add('hidden');
      $dotList[i].classList.remove('fas');
      $dotList[i].classList.add('far');
    } else {
      $imageList[i].classList.remove('hidden');
      $dotList[i].classList.add('fas');
      $dotList[i].classList.remove('far');
    }
  }
  clearInterval(autoScroll);
  autoScroll = setInterval(transitionRight, 3000);
}
