const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((sum, number) => sum + number);
const product = numbers.reduce((product, number) => product * number);
const balance = account.reduce((balance, transaction) => {
  return transaction.type === 'deposit'
    ? balance + transaction.amount
    : balance - transaction.amount;
}, 0);
const composite = traits.reduce((pokemon, property) => {
  const [key, value] = Object.entries(property)[0];
  pokemon[key] = value;
  return pokemon;
});

console.log('sum:', sum);
console.log('product:', product);
console.log('balance:', balance);
console.log('composite:', composite);
