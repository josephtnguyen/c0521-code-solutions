const fs = require('fs');
const note = process.argv[2];
fs.writeFile('note.txt', note, err => {
  if (err) {
    console.log(err);
  }
});
