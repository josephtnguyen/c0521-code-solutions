const express = require('express');
const app = express();
const grade = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening to port 3000');
});

app.use('/api/grades', (req, res) => {
  // console.log('get received');
  const grades = [];
  for (const instance in grade) {
    grades.push(grade[instance]);
  }
  res.json(grades);
});
