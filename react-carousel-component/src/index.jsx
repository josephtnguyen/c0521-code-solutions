import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const pokemon = [
  {
    id: '001',
    url: 'images/001.png'
  },
  {
    id: '004',
    url: 'images/004.png'
  },
  {
    id: '007',
    url: 'images/007.png'
  },
  {
    id: '025',
    url: 'images/025.png'
  },
  {
    id: '039',
    url: 'images/039.png'
  }
];

ReactDOM.render(
  <Carousel images={pokemon} />,
  document.querySelector('#root')
);
