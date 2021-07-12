const express = require('express');
const path = require('path');
const app = express();

const absPath = path.join(__dirname, 'public');

app.use(express.static(absPath));

app.listen(3000, () => {
  console.log('listening to port 3000');
});
