import React from 'react';
import ReactDOM from 'react-dom';
import AppDrawer from './app-drawer';
const dummy = {
  heading: 'Menu',
  pages: [
    { id: 1, text: 'About' },
    { id: 2, text: 'Get Started' },
    { id: 3, text: 'Sign In' }
  ]
};

ReactDOM.render(
  <AppDrawer menu={dummy} />,
  document.querySelector('#root')
);
