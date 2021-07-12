import React from 'react';

export default function MenuItem(props) {
  return (
    <li className="menu-item" onClick={props.onSelect}>
      {props.text}
    </li>
  );
}
