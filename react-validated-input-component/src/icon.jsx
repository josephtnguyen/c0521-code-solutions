import React from 'react';

export default class Icon extends React.Component {
  render() {
    const validPassword = this.props.validPassword;
    const check = <i className="fa fa-check green" />;
    const x = <i className="fa fa-times red" />;
    const icon = validPassword ? check : x;
    return (
      <span className="icon">
        {icon}
      </span >
    );
  }
}
