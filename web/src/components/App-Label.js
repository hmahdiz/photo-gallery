import React from "react";

const appLabel = ({ children, className }) => (
  <label className={`appLabel ${className}`}>{children}</label>
);

export default appLabel;
