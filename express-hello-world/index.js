const express = require('express');
const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening to port 3000');
});

app.use((req, res) => {
  res.send('<h1>ur cool</h1>');
});
