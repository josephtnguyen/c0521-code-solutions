import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function ListItem(props) {
  return (
    <li>
      {props.name}
    </li>
  );
}

function UnorderedList(props) {
  const ListItems = props.values.map(pokemon =>
    <ListItem key={pokemon.number} name={pokemon.name} />
  );
  return (
    <ul>
      {ListItems}
    </ul>
  );
}

ReactDOM.render(
  <UnorderedList values={pokedex} />,
  document.querySelector('#root')
);
