import React from "react";
import Title from "./Title";
import Details from "./Details";

const Header = (props) => {
  const { title, details } = props;
  return (
    <div className="Header">
      <Title title={title} />
      <Details details={details} />
    </div>
  );
};

export default Header;
