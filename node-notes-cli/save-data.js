const fs = require('fs');
module.exports = data => {
  const save = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', save, err => {
    if (err) {
      console.log(err);
    }
  });
};
