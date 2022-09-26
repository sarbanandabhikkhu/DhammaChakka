import React from "react";
import { logo } from "../../utils/svgIcons";

function Footer() {
  const root = document.getElementById("DOM");
  return (
    <div className="Footer">
      <div className="HostBar">
        <img src={logo} alt="Logo" />
        <span>DhammaChakka</span>
      </div>
    </div>
  );
}

export default Footer;
