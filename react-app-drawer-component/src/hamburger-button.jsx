import React from 'react';

export default class HamburgerButton extends React.Component {
  render() {
    return (
      <div className="hamburger-button">
        <i className="fa fa-bars" onClick={this.props.onOpen}/>
      </div>
    );
  }
}
