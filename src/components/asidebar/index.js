import React from "react";
import Accordion from "../accordion";
import items from "../../icons/menu-dots.svg";

const AsideBar = () => {
  const handleClick = () => {
    alert("Hey, Explore action button is clicked!");
  };
  return (
    <div className="AsideBar">
      <div className="TopBar">
        <span>Explore</span>
        <img src={items} onClick={handleClick} />
      </div>
      <Accordion />
    </div>
  );
};

export default AsideBar;
