import React from 'react';
import ArrowButton from './arrow-button';
import Image from './image';
import Dot from './dot';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.shiftLeft = this.shiftLeft.bind(this);
    this.shiftRight = this.shiftRight.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.resetTimeout = this.resetTimeout.bind(this);
    this.state = {
      showingIndex: 0,
      timeoutId: 0
    };
  }

  shiftLeft(event) {
    const lastIndex = this.props.images.length - 1;
    const { showingIndex } = this.state;
    const nextId = showingIndex === 0 ? lastIndex : showingIndex - 1;
    const timeoutId = this.resetTimeout();
    this.setState({ showingIndex: nextId, timeoutId });
  }

  shiftRight(event) {
    const lastIndex = this.props.images.length - 1;
    const { showingIndex } = this.state;
    const nextId = showingIndex === lastIndex ? 0 : showingIndex + 1;
    const timeoutId = this.resetTimeout();
    this.setState({ showingIndex: nextId, timeoutId });
  }

  handleSelect(event) {
    const $dot = event.target.closest('.dot');
    const id = parseInt($dot.id);
    const timeoutId = this.resetTimeout();
    this.setState({ showingIndex: id, timeoutId });
  }

  resetTimeout() {
    clearInterval(this.state.timeoutId);
    return setTimeout(this.shiftRight, 3000);
  }

  componentDidMount() {
    const timeoutId = setTimeout(this.shiftRight, 3000);
    this.setState({ timeoutId });
  }

  render() {
    const images = this.props.images.map((image, index) =>
      <Image
        key={image.id}
        id={index}
        showingIndex={this.state.showingIndex}
        url={image.url} />
    );
    const dots = this.props.images.map((image, index) =>
      <Dot
        key={image.id}
        id={index}
        showingIndex={this.state.showingIndex}
        handleSelect={this.handleSelect} />
    );
    return (
      <div className="carousel flex-center">
        <ArrowButton type="left" handleArrow={this.shiftLeft} />
        {images}
        <ArrowButton type="right" handleArrow={this.shiftRight} />
        <div className="dots">
          {dots}
        </div>
      </div>
    );
  }
}
