import React from "react";

function Color(props) {
  const { color, setColor } = props;
  return (
    <div
      className="color-item"
      onClick={setColor}
      style={{ background: color }}
    ></div>
  );
}

export default Color;
