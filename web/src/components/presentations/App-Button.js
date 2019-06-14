import React from "react";

const appButton = ({
  children,
  onClick,
  className,
  danger,
  success,
  warning
}) => {
  let extraClassName =
    (className ? className : "") +
    (danger
      ? "dangerButton"
      : success
      ? "successButton"
      : warning
      ? "warningButton"
      : "");

  return (
    <button className={`appButton ${extraClassName}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default appButton;
