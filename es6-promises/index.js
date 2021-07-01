const takeAChance = require('./take-a-chance');

const promiseObj = takeAChance('kid');
promiseObj.then(console.log, error => { console.log(error.message); });
