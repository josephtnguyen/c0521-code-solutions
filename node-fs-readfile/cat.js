const fs = require('fs');
const [,, ...files] = process.argv;
let counter = 0;
readFiles(files);

function readFiles(files) {
  const file = files[counter];
  counter++;
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    if (counter < files.length) {
      readFiles(files);
    }
  });
}
