import React, { Component } from "react";

class AppText extends Component {
  render() {
    const { children, className } = this.props;
    const textInput = children ? (
      <input type="text" className="appInput" value={children} readOnly />
    ) : (
      <input
        type="text"
        className={`appInput ${className}`}
        ref={element => (this.inputElement = element)}
      />
    );

    return <div>{textInput}</div>;
  }
}

export default AppText;
