module.exports = (data, contents) => {
  data.notes[data.nextId] = contents;
  data.nextId++;
};
