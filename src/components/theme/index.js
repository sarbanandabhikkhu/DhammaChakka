import React, { useEffect, useState } from "react";
import Color from "./Color";
import SelectColorIcon from "../../icons/settings.svg";

function SelectTheme(props) {
  const colors = [
    "#2d3436",
    "#4834d4",
    "#ba2add",
    "#f9ca24",
    "#6ab04c",
    "#30336b",
  ];

  const defaultTheme = "Light";

  useEffect(() => {
    const currentcolor = localStorage.getItem("color");
    setTheme(currentcolor);
  }, []);

  const setTheme = (color) => {
    document.documentElement.style.setProperty("background", color);
    document.body.setAttribute("theme", defaultTheme.toLocaleLowerCase());
  };

  const setColor = (e) => {
    const currentcolor = e.target.style.getPropertyValue("background");
    setTheme(currentcolor);
    localStorage.setItem("color", currentcolor);
  };

  const { show } = props;
  return (
    <div className={`SelectTheme${show && " active"}`}>
      <div className="color-plate">
        {colors.map((color) => (
          <Color key={color} color={color} setColor={setColor} />
        ))}
      </div>
    </div>
  );
}

export default SelectTheme;
