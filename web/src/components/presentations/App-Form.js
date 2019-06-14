import React from "react";

const appForm = ({ children, className, ...rest }) => {
  //   const { children } = props;

  return (
    <form className={`appForm ${className}`} {...rest}>
      {children}
    </form>
  );
};

export default appForm;
