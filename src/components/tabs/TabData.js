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

const Paragraph = ({ content }) => {
  if (/^\"g\"/.test(content)) {
    return <p className="g">{content.replace(/\"g\"/, "")}</p>;
  } else if (/^\"g\)\"/.test(content)) {
    return <p className="ge">{content.replace(/^\"g\)\"/, "")}</p>;
  } else if (/^\"g\)\)\"/.test(content)) {
    return <p className="gend">{content.replace(/^\"g\)\)\"/, "")}</p>;
  } else if (/^\"\)\"/.test(content)) {
    return <h4 className="end">{content.replace(/^\"\)\"/, "")}</h4>;
  } else {
    return (
      <p>
        {content
          .replace(/\"b\"/gi, "<b>")
          .replace(/\"b\)\"/gi, "</b>")
          .replace(/\[/gi, "<span>[")
          .replace(/\]/gi, "]</span>")}
      </p>
    );
  }
};

const TabContent = (props) => {
  const { toggleState, tabIndex, title, content } = props;

  return (
    <div
      className={
        toggleState === tabIndex ? "content active-content" : "content"
      }
    >
      <h3>{title}</h3>
      {content && content.map((content) => <Paragraph content={content} />)}
    </div>
  );
};

export { TabButton, TabContent };
