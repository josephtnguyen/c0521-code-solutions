var num1 = 24;
var num2 = 25;
var num3 = -10;

var maximumValue = Math.max(num1, num2, num3);
console.log('value of maximumValue:', maximumValue);

var heroes = ['Captain America', 'Iron Man', 'Thor', 'Black Widow'];

var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

var library = [
  {
    title: 'The Way of Kings',
    author: 'Brandon Sanderson'
  },
  {
    title: '12 Rules For Life',
    author: 'Jordan Peterson'
  },
  {
    title: 'Tribe',
    author: 'Sebastian Junger'
  }
];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);

var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library:', library);

var fullName = 'Joseph Nguyen';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
