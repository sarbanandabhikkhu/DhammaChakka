import React, { useState, useEffect, useRef } from "react";
import Chevron from "../../icons/angle-down.svg";

function Accordion() {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    console.log(refHeight);
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };

  console.log(toggle);

  return (
    <div className="Accordion">
      <button onClick={toggleState} className="AccordionBtn">
        <img className={toggle && "active"} src={Chevron} />
        <span>Lorem ipsum</span>
      </button>
      <div
        ref={refHeight}
        className={toggle ? "AccordionToggle animated" : "AccordionToggle"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
      >
        <p aria-hidden={toggle ? "true" : "false"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          suscipit quae maiores sunt ducimus est dolorem perspiciatis earum
          corporis unde, dicta quibusdam aut placeat dignissimos distinctio vel
          quo eligendi ipsam.
        </p>
      </div>
    </div>
  );
}

export default Accordion;
