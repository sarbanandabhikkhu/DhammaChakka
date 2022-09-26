import React from "react";
import {
  menuBurger,
  file,
  search,
  book,
  apps,
  settings,
  user,
} from "../../utils/svgIcons";

const Nav = () => {
  return (
    <div className="Nav">
      <img src={menuBurger} alt="Menu" />
      <div className="Top">
        <img src={file} alt="Explore" />
        <img src={search} alt="Search" />
        <img src={book} alt="Dictionary" />
        <img src={apps} alt="Apps" />
      </div>
      <div className="Bottom">
        <img src={settings} alt="Settings" />
        <img src={user} alt="User" />
      </div>
    </div>
  );
};

export default Nav;
