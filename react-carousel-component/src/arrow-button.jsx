import React from 'react';

export default class ArrowButton extends React.Component {
  render() {
    const { type, handleArrow } = this.props;
    const leftArrow = <i className="fa fa-chevron-left" />;
    const rightArrow = <i className="fa fa-chevron-right" />;

    const arrow = type === 'left' ? leftArrow : rightArrow;
    const className = `arrow-button ${type} flex-center`;
    return (
      <div className={className} onClick={handleArrow}>
        {arrow}
      </div>
    );
  }
}
