import React from "react";

const TabBtn = (props) => {
  const { toggleState, index, text } = props;
  return (
    <button
      className={toggleState === index ? "tabs active-tabs" : "tabs"}
      onClick={() => toggleTab(index)}
    >
      {text}
    </button>
  );
};

export default TabBtn;
