import React from "react";
import split from "../../icons/book-alt.svg";
import items from "../../icons/menu-dots.svg";

const TabAction = () => {
  const handleClick = (e) => {
    alert("Action button is Clicked!");
  };

  return (
    <div className="tab-action">
      <img onClick={handleClick} src={split} alt="Split Tab" />
      <img onClick={handleClick} src={items} alt="Menu Item" />
    </div>
  );
};

export default TabAction;
