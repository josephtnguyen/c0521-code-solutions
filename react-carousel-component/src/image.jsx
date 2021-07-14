import React from 'react';

export default class Image extends React.Component {
  render() {
    const { id, showingIndex, url } = this.props;
    const imageClass = id === showingIndex ? 'image' : 'image hidden';
    return (
      <img className={imageClass} id={id} src={url} />
    );
  }
}
