import React, { useEffect, useState } from "react";
import TabAction from "./TabAction";
import { TabContent, TabButton } from "./TabData";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const [parajika, setParajika] = useState(false);
  // const uid = new Date().getTime().toString(36);
  const URL =
    "https://sarbanandabhikkhu.github.io/dhammachakka/" ||
    "http://localhost:8080/";
  useEffect(() => {
    fetch(URL + "data/pārājika.json")
      .then((res) => res.json())
      .then((data) => {
        setParajika(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="Tabs">
      <div className="tab-buttons">
        {parajika &&
          parajika.map((data, index) => (
            <TabButton
              toggleState={toggleState}
              setToggleState={setToggleState}
              tabIndex={index + 1}
              buttonText={data.title.split(",")}
            />
          ))}
      </div>

      <TabAction />

      <div className="tab-contents">
        {parajika &&
          parajika.map((data, index) => (
            <TabContent
              toggleState={toggleState}
              tabIndex={index + 1}
              title={parajika[index].title}
              content={data.content}
            />
          ))}
      </div>
    </div>
  );
}

export default Tabs;
