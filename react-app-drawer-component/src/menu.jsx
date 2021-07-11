import React from 'react';
import MenuItem from './menu-item.jsx';

export default class Menu extends React.Component {
  render() {
    const hiddenState = this.props.isOpen ? '' : ' hide-left';
    const { menu, onSelect } = this.props;
    return (
      <div className={'menu' + hiddenState}>
        <h2>{menu.heading}</h2>
        <ul className="menu-list">
          {menu.pages.map(page => (
            <MenuItem key={page.id} text={page.text} onSelect={onSelect} />
          ))}
        </ul>
      </div>
    );
  }
}
