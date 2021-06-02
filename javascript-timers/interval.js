var $h1 = document.querySelector('h1');

var counting = setInterval(countdown, 1000);

function countdown() {
  var num = parseInt($h1.textContent);
  if (num === 1) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(counting);
  } else {
    $h1.textContent = num - 1;
  }
}
