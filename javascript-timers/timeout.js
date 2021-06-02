var $h1 = document.querySelector('h1');

setTimeout(timeout, 2000);

function timeout() {
  $h1.textContent = 'Hello There';
}
