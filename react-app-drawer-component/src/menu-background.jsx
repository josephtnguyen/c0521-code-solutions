import React from 'react';

export default class MenuBackground extends React.PureComponent {
  render() {
    const { onSelect, isOpen } = this.props;
    const hiddenState = isOpen ? '' : ' hidden';
    const className = 'menu-background' + hiddenState;
    return <div className={className} onClick={onSelect} />;
  }
}
