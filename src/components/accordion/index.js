import React, { useState, useEffect, useRef } from "react";
import chevron from "../../icons/angle-down.svg";
import folder from "../../icons/folder.svg";
import document from "../../icons/document.svg";

function AccordionLink({ toggle, title }) {
  const handleClick = () => {
    alert("Hey, content link is clicked!");
  };

  const titleDepth = title.length - 1;

  return (
    <a
      className="accordion-link"
      href="#"
      onClick={handleClick}
      aria-hidden={toggle ? "true" : "false"}
    >
      <img src={document} />
      {title[titleDepth].trim().length > 20
        ? title[titleDepth].trim().substring(0, 20) + "..."
        : title[titleDepth].trim()}
    </a>
  );
}

function Accordion() {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();
  const [parajika, setParajika] = useState(false);
  const URL =
    "https://sarbanandabhikkhu.github.io/DhammaChakka/data/pārājika.json";
  // "http://localhost:8080/data/pārājika.json";

  const refHeight = useRef();

  useEffect(() => {
    console.log(refHeight);
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setParajika(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="Accordion">
      <button
        onClick={toggleState}
        className={
          toggle && toggle ? "accordion-btn --active" : "accordion-btn"
        }
      >
        <img
          className={toggle && toggle ? "indicates active" : "indicates"}
          src={chevron}
        />
        <img src={folder} />
        <span>parajika</span>
      </button>
      <div
        ref={refHeight}
        className={toggle ? "accordion-panel animated" : "accordion-panel"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
      >
        {parajika &&
          parajika.map((data) => (
            <AccordionLink toggle={toggle} title={data.title.split(",")} />
          ))}
      </div>
    </div>
  );
}

export default Accordion;
