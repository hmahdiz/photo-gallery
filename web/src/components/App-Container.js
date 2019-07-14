import React from "react";

const appContainer = ({ children }) => {
  const alarm =
    children && !children.length && children.type.name === "appContent"
      ? null
      : "App-Panel should be used inside App-containr";

  console.log();
  return (
    <div className="appContainer">
      <span className="appContainerAlarm">{alarm}</span>
      {children}
    </div>
  );
};

export default appContainer;
