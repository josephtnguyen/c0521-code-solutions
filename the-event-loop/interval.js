let counter = 3;
const countDown = setInterval(function () {
  if (counter === 0) {
    console.log('Blast off!');
    clearInterval(countDown);
    return;
  }
  console.log(counter);
  counter--;
}, 1000);
