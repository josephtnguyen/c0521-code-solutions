import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    if (this.state.clicks < 3) {
      return (
        <button className='hot-button cold' onClick={this.handleClick}>
          Hot Button
        </button>
      );
    } else if (this.state.clicks < 6) {
      return (
        <button className='hot-button lukewarm' onClick={this.handleClick}>
          Hot Button
        </button>
      );
    } else if (this.state.clicks < 9) {
      return (
        <button className='hot-button warm' onClick={this.handleClick}>
          Hot Button
        </button>
      );
    } else if (this.state.clicks < 12) {
      return (
        <button className='hot-button hot' onClick={this.handleClick}>
          Hot Button
        </button>
      );
    } else if (this.state.clicks < 15) {
      return (
        <button className='hot-button hotter' onClick={this.handleClick}>
          Hot Button
        </button>
      );
    } else {
      return (
        <button className='hot-button hottest' onClick={this.handleClick}>
          Hot Button
        </button>
      );
    }
  }
}
