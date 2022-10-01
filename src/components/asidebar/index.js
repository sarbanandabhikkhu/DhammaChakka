import React from "react";
import Accordion from "../accordion";

const AsideBar = (prps) => {
  return (
    <div className="AsideBar">
      <div className="TopBar">
        <span>Explore</span>
      </div>
      <Accordion />
    </div>
  );
};

export default AsideBar;
