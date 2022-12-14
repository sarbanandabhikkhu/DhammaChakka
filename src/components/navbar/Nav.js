import React, { useState } from "react";
import File from "../../icons/file.svg";
import Search from "../../icons/search.svg";
import Book from "../../icons/book.svg";
import Apps from "../../icons/apps.svg";
import User from "../../icons/user.svg";
import Settings from "../../icons/settings.svg";
import SelectTheme from "../theme";

function Nav() {
  const [select, setSelect] = useState(false);
  const selectTheme = () => setSelect((prevState) => !prevState);

  return (
    <nav className="NavContainer">
      <div className="Top">
        <img className="NavBtn" src={File} alt="Explore" />
        <img className="NavBtn" src={Search} alt="Search" />
        <img className="NavBtn" src={Book} alt="Dictionary" />
        <img className="NavBtn" src={Apps} alt="Apps" />
      </div>
      <div className="Bottom">
        <img
          className="NavBtn"
          src={Settings}
          alt="Settings"
          onClick={selectTheme}
        />
        <SelectTheme show={select} />
        <img className="NavBtn" src={User} alt="User" />
      </div>
    </nav>
  );
}

export default Nav;
