import React from 'react';
import ReactDOM from 'react-dom';
import Accordian from './accordian';
const languages = [
  {
    id: 1,
    heading: 'Hypertext Markup Language',
    description: 'HyperText Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.'
  },
  {
    id: 2,
    heading: 'Cascading Style Sheet',
    description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.'
  },
  {
    id: 3,
    heading: 'JavaScript',
    description: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
  }
];

ReactDOM.render(
  <Accordian items={languages} />,
  document.querySelector('#root')
);
