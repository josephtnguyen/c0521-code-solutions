module.exports = data => {
  for (let i = 1; i < data.nextId; i++) {
    if (data.notes[i]) {
      console.log(`${i}: ${data.notes[i]}`);
    }
  }
};
