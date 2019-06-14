import React from "react";

const appContainer = ({ children }) => {
  const alarm =
    children && !children.length && children.type.name === "appContent"
      ? null
      : "App Content should be used in App containr";

  console.log();
  return (
    <div className="appContainer">
      <span>{alarm}</span>
      {children}
    </div>
  );
};

export default appContainer;
