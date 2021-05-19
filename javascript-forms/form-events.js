function handleFocus(event) {
  console.log("'focus' event was fired");
  console.log('event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log("'blur' event was fired");
  console.log('event.target.name:', event.target.name);
}

function handleInput(event) {
  var name = event.target.name;
  var value = event.target.value;
  console.log('value of', name, ':', value);
}

var $name = document.forms[0][0];
var $email = document.forms[0][1];
var $message = document.forms[0][2];

$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);

$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);

$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
