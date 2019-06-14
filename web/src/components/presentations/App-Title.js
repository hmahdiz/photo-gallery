import React from "react";

const appTitle = ({ children, small, medium, big }) => {
  const titleInput = small ? (
    <h3>{children}</h3>
  ) : medium ? (
    <h2>{children}</h2>
  ) : (
    <h1> {children}</h1>
  );

  return <span>{titleInput}</span>;
};

export default appTitle;
