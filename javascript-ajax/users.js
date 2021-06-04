var $users = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', handleLoad);
xhr.send();

function handleLoad(event) {
  console.log('status:', xhr.status);
  console.log('response:', xhr.response);
  for (var i = 0; i < xhr.response.length; i++) {
    var $li = document.createElement('li');
    $li.textContent = xhr.response[i].name;
    $users.append($li);
  }
}
