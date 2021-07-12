import React from 'react';
import Icon from './icon';
import Error from './error';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleType = this.handleType.bind(this);
    this.state = {
      password: '',
      longEnough: false,
      hasDigit: false,
      hasCapital: false,
      hasSpecial: false,
      validPassword: false
    };
  }

  handleType(event) {
    const password = event.target.value;
    const longEnough = password.length >= 8;
    let hasDigit = false;
    const hasCapital = password !== password.toUpperCase().toLowerCase();
    let hasSpecial = false;

    for (const digit of '0123456789') {
      if (password.includes(digit)) {
        hasDigit = true;
        break;
      }
    }

    for (const char of '!@#$%^&*()') {
      if (password.includes(char)) {
        hasSpecial = true;
        break;
      }
    }

    this.setState({
      password: password,
      longEnough: longEnough,
      hasDigit: hasDigit,
      hasCapital: hasCapital,
      hasSpecial: hasSpecial,
      validPassword: longEnough && hasDigit && hasCapital && hasSpecial
    });
  }

  render() {
    const { password } = this.state;
    return (
      <div className="container">
        <label>
          <h3 className="heading">Password</h3>
          <input type="password" value={password} onChange={this.handleType} />
          <Icon validPassword={this.state.validPassword} />
          <Error state={this.state} />
        </label>

      </div>
    );
  }
}
