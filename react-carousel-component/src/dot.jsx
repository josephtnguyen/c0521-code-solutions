import React from 'react';

export default class Dot extends React.Component {
  render() {
    const { id, showingIndex, handleSelect } = this.props;
    const selected = <i className="fa fa-circle dot" id={id} onClick={handleSelect} />;
    const notSelected = <i className="far fa-circle dot" id={id} onClick={handleSelect} />;
    const circle = id === showingIndex ? selected : notSelected;
    return circle;
  }
}
