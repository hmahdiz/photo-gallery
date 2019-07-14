import React from "react";

const appImage = ({ className, ...rest }) => {
  return <img className={`appImage ${className}`} {...rest} />;
};

export default appImage;
