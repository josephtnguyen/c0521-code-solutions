import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.state.isOn) {
      this.setState({ isOn: false });
    } else {
      this.setState({ isOn: true });
    }
  }

  render() {
    const state = this.state.isOn ? 'on' : 'off';
    const toggleClass = `toggle-switch-container ${state}`;
    const switchClass = `switch ${state}`;
    return (
        <div className="container">
          <div className={toggleClass} onClick={this.handleClick}>
          <button className={switchClass} />
          </div>
          <p>
            {state.toUpperCase()}
          </p>
        </div>
    );
  }
}
