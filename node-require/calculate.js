const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const first = parseInt(process.argv[2]);
const second = parseInt(process.argv[4]);
const operator = process.argv[3];

if (operator === 'plus') {
  console.log('result:', add(first, second));
} else if (operator === 'minus') {
  console.log('result:', subtract(first, second));
} else if (operator === 'times') {
  console.log('result:', multiply(first, second));
} else if (operator === 'over') {
  console.log('result:', divide(first, second));
}
