import React from 'react';

export default class Error extends React.Component {
  render() {
    const { password, longEnough, hasDigit, hasCapital, hasSpecial } = this.props.state;
    const needPassword = 'A password is required.';
    const tooShort = 'Your password is too short.';
    const missingDigit = 'Your password is missing a number (0-9).';
    const missingCapital = 'Your password is missing a capital letter.';
    const missingSpecial = 'Your password is missing a special character (!, @, #, $, %, ^, &, *, (, or ))';
    let errorMessage = '';
    if (password === '') {
      errorMessage = needPassword;
    } else if (!longEnough) {
      errorMessage = tooShort;
    } else if (!hasDigit) {
      errorMessage = missingDigit;
    } else if (!hasCapital) {
      errorMessage = missingCapital;
    } else if (!hasSpecial) {
      errorMessage = missingSpecial;
    }
    return (
      <p className="error">
        {errorMessage}
      </p >
    );
  }
}
