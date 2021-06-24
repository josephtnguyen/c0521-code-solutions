const fs = require('fs');
const [,, read, write] = process.argv;
fs.readFile(read, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  fs.writeFile(write, data, err => {
    if (err) {
      console.log(err);
    }
  });
});
