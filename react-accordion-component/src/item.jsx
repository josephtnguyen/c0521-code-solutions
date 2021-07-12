import React from 'react';

export default class Item extends React.Component {
  render() {
    const { contents, opening, onSelect } = this.props;
    const { id, heading, description } = contents;
    const hiddenClass = opening !== id ? ' hidden' : '';
    return (
      <li id={id}>
        <h3 className="heading" onClick={onSelect}>{heading}</h3>
        <p className={'body' + hiddenClass}>{description}</p>
      </li>
    );
  }
}
