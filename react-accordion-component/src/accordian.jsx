import React from 'react';
import Item from './item';

export default class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      openingId: 0
    };
  }

  handleSelect(event) {
    const $li = event.target.closest('li');
    let id = parseInt($li.id);
    if (id === this.state.openingId) {
      id = 0;
    }
    this.setState({ openingId: id });
  }

  render() {
    const { items } = this.props;
    const { openingId } = this.state;
    const reactItems = items.map(item =>
      <Item key={item.id} contents={item} opening={openingId} onSelect={this.handleSelect} />
    );
    return (
    <ul className="container">
      {reactItems}
    </ul>
    );
  }
}
