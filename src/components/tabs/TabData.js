import React from "react";

const TabButton = ({ toggleState, setToggleState, tabIndex, buttonText }) => {
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const titleDepth = buttonText.length - 1;
  return (
    <button
      className={toggleState === tabIndex ? "tab active-tab" : "tab"}
      onClick={() => toggleTab(tabIndex)}
    >
      {buttonText[titleDepth].trim().length > 15
        ? buttonText[titleDepth].trim().substring(0, 12) + "..."
        : buttonText[titleDepth].trim()}
    </button>
  );
};

const Para = ({ title, content }) => {
  return content.split(/\n\n/).map((paragraph) => {
    return (
      <p className="paragraph">
        {paragraph
          .replace(/\[/, "———[")
          .replace(/\]/, "]———")
          .split(/———/)
          .map((quote) => {
            if (quote[0] === "[") return <span className="quote">{quote}</span>;
            return quote;
          })}
      </p>
    );
  });
};

const TabContent = (props) => {
  const { toggleState, tabIndex, title, content } = props;

  return (
    <div
      className={
        toggleState === tabIndex ? "content active-content" : "content"
      }
    >
    
      		<h3 className="heading">
        {title.split(",")[title.split(",").length - 1]}
      </h3>
      <Para title={title} content={content} />;
    </div>
  );
};

export { TabButton, TabContent };
