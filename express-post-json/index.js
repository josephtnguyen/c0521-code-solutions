const express = require('express');
const app = express();
let nextId = 1;
const grade = {};

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening to port 3000');
});

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const grades = [];
  for (const instance in grade) {
    grades.push(grade[instance]);
  }
  res.json(grades);
});

app.post('/api/grades', (req, res) => {
  const post = req.body;
  post.id = nextId;
  nextId++;
  grade[post.id] = post;

  res.status(201);
  res.send(post);
});
