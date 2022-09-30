import React from "react";
import { BrandLogo } from "../../logo.svg";

function Footer() {
  return (
    <div className="Footer">
      <div className="HostBar">
        <img src={BrandLogo} alt="DhammaChakka" />
        <span>DhammaChakka</span>
      </div>
    </div>
  );
}

export default Footer;
