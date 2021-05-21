var books = [
  {
    isbn: '9780765326355',
    title: 'The Way of Kings',
    author: 'Brandon Sanderson'
  },
  {
    isbn: '9780613685726',
    title: 'Everyone Poops',
    author: 'Taro Gomi'
  },
  {
    isbn: '9780747532743',
    title: 'Harry Potter and the Philosopher\'s Stone',
    author: 'J. K. Rowling'
  }
];

console.log('books:', books);
console.log('typeof books:', typeof books);

var serBooks = JSON.stringify(books);
console.log('serBooks:', serBooks);
console.log('typeof serBooks:', typeof serBooks);

var serStudent = '{"id": 1234567, "name": "Joseph Nguyen"}';
console.log('serStudent:', serStudent);
console.log('typeof serStudent:', typeof serStudent);

var student = JSON.parse(serStudent);
console.log('student:', student);
console.log('typeof student:', typeof student);
