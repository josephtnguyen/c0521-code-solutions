const data = require('./data.json');
const readData = require('./read-data');
const addData = require('./add-data');
const deleteData = require('./delete-data');
const updateData = require('./update-data');
const saveData = require('./save-data');
const [,, action, ...args] = process.argv;

if (action === 'read') {
  readData(data);
} else if (action === 'create') {
  addData(data, args[0]);
} else if (action === 'delete') {
  deleteData(data, args[0]);
} else if (action === 'update') {
  updateData(data, args[0], args[1]);
}

saveData(data);
