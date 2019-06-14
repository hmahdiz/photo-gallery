import React from "react";

const appList = ({ order, items, className, onClickItem }) => {
  const listItem =
    items &&
    items.map(item => (
      <li key={item.id} onClick={() => onClickItem(item)}>
        {item.name}
      </li>
    ));
  const list = order ? <ol>{listItem}</ol> : <ul>{listItem}</ul>;

  return <div className={`appList ${className}`}>{list}</div>;
};

export default appList;
