const express = require('express');
const fs = require('fs');
const app = express();
let data = {};

fs.readFile('data.json', (err, dataFile) => {
  if (err) {
    console.error(err);
  }
  data = JSON.parse(dataFile);
});

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notes = [];
  for (const instance in data.notes) {
    notes.push(data.notes[instance]);
  }
  res.send(notes);
});

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const idInt = parseInt(id);
  if (idInt < 1 || isNaN(idInt)) {
    res.status(400).send('Error: id must be a positive integer');
  } else if (data.notes[id]) {
    res.json(data.notes[id]);
  } else {
    res.status(404).send(`Error: could not find note with id of ${id}`);
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const idInt = parseInt(id);
  if (idInt < 1 || isNaN(idInt)) {
    res.status(400).send('Error: id must be a positive integer');
  } else if (!data.notes[id]) {
    res.status(404).send(`Error: could not find note with id of ${id}`);
  } else {
    delete data.notes[id];
    updateDataJSON(data, req, res, 'delete');
  }
});

app.post('/api/notes/', (req, res) => {
  if (!req.body.content) {
    res.status(400).send('Error: content is a required field');
    return;
  }
  const content = req.body;
  content.id = data.nextId;
  data.notes[data.nextId] = content;
  data.nextId++;
  updateDataJSON(data, req, res, 'create', content);
});

app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const idInt = parseInt(id);
  if (idInt < 1 || isNaN(idInt)) {
    res.status(400).send('Error: id must be a positive integer');
  } else if (!req.body.content) {
    res.status(400).send('Error: content is a required field');
  } else if (!data.notes[id]) {
    res.status(404).send(`Error: could not find note with id of ${id}`);
  } else {
    data.notes[id].content = req.body.content;
    updateDataJSON(data, req, res, 'update', data.notes[id]);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening to port 3000');
});

function updateDataJSON(data, req, res, method, note = null) {
  fs.writeFile('data.json', JSON.stringify(data), err => {
    if (err) {
      res.status(500).send('Error: an unexpected error has occurred');
    } else {
      if (method === 'delete') {
        res.sendStatus(204);
      } else if (method === 'create') {
        res.status(201).send(note);
      } else if (method === 'update') {
        res.status(200).send(note);
      }
    }
  });
}
