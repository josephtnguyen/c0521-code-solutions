const pg = require('pg');
const express = require('express');
const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
  select *
    from "grades"
  `;

  db.query(sql)
    .then(
      result => {
        res.json(result.rows);
      }, err => {
        console.error(err);
        res.status(500).send('Error: an unexpected error has occurred');
      }
    );
});

app.post('/api/grades/', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;
  const scoreInt = parseInt(score);
  if (!name) {
    res.status(400).send('Error: name is missing');
    return;
  }
  if (!course) {
    res.status(400).send('Error: course is missing');
    return;
  }
  if (!score) {
    res.status(400).send('Error: score is missing');
    return;
  } else if (!Number.isInteger(scoreInt) || scoreInt < 0 || scoreInt > 100) {
    res.status(400).send(`Error: ${score} is not a valid score`);
    return;
  }

  const sql = `
  insert into "grades" ("name", "course", "score")
  values ($1, $2, $3)
  returning *
  `;
  const params = [name, course, score];

  db.query(sql, params)
    .then(
      result => {
        const added = result.rows[0];
        res.status(201).json(added);
      }, err => {
        console.error(err);
        res.status(500).send('Error: an unexpected error has occurred');
      }
    );
});

app.put('/api/grades/:gradeId', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;
  const scoreInt = parseInt(score);
  const gradeId = req.params.gradeId;
  const gradeIdInt = parseInt(gradeId);
  if (!name) {
    res.status(400).send('Error: name is missing');
    return;
  }
  if (!course) {
    res.status(400).send('Error: course is missing');
    return;
  }
  if (!score) {
    res.status(400).send('Error: score is missing');
    return;
  } else if (!Number.isInteger(scoreInt) || scoreInt < 0 || scoreInt > 100) {
    res.status(400).send(`Error: ${score} is not a valid score`);
    return;
  }
  if (!Number.isInteger(gradeIdInt) || gradeIdInt < 1) {
    res.status(400).send('Error: gradeId should be a positive integer');
    return;
  }

  const sql = `
  update "grades"
     set "name" = $1,
         "course" = $2,
         "score" = $3
   where "gradeId" = $4
  returning *
  `;
  const params = [name, course, score, gradeId];

  db.query(sql, params)
    .then(
      result => {
        const added = result.rows[0];
        if (added) {
          res.json(added);
        } else {
          res.status(404).send(`Error: no grade exists with the gradeId ${gradeId}`);
        }
      }, err => {
        console.error(err);
        res.status(500).send('Error: an unexpected error has occurred');
      }
    );
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = req.params.gradeId;
  const gradeIdInt = parseInt(gradeId);
  if (!Number.isInteger(gradeIdInt) || gradeIdInt < 1) {
    res.status(400).send('Error: gradeId should be a positive integer');
    return;
  }
  const sql = `
  delete from "grades"
        where "gradeId" = $1
  returning *;
  `;
  const params = [gradeId];

  db.query(sql, params)
    .then(
      result => {
        const deleted = result.rows[0];
        if (deleted) {
          res.sendStatus(204);
        } else {
          res.status(404).send(`Error: no grade exists with the gradeId ${gradeId}`);
        }
      }, err => {
        console.error(err);
        res.status(500).send('Error: an unexpected error has occurred');
      }
    );
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening to port 3000');
});
