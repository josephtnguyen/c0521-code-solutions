var $contactUs = document.forms[0];
$contactUs.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  var formElements = {};
  for (var i = 0; i < $contactUs.length - 1; i++) {
    formElements[$contactUs.elements[i].name] = $contactUs.elements[i].value;
  }

  console.log(formElements);
  $contactUs.reset();
}
