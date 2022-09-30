import React, { useState, useEffect } from "react";
import Menu from "../../icons/menu-bar.svg";
import Nav from "./Nav";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="NavBar">
      <div className="MenuBtn">
        <img onClick={toggleNav} src={Menu} alt="Menu" />
      </div>
      {(toggleMenu || screenWidth > 500) && <Nav />}
    </div>
  );
}

export default Navbar;
