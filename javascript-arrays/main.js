var colors = ['red',
  'white',
  'blue'];

console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors[2]:', colors[2]);
var americaString = 'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log(americaString);

colors[2] = 'green';
var mexicoString = 'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log(mexicoString);

console.log('value of colors:', colors);

var students = ['Joseph', 'Bill', 'Bobby', 'Tom'];
var numberOfStudents = students.length;
var numberString = 'There are ' + numberOfStudents + ' students in the class.';
console.log(numberString);

var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
var lastString = 'The last student in the array is ' + lastStudent + '.';
console.log(lastString);

console.log('value of students:', students);
