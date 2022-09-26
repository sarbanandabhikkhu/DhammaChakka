import React from "react";
import { hot } from "react-hot-loader/root";
import Header from "./components/Header";
import data from "../src/data/data.json";
import logo from "./logo.svg";

const App = () => {
  const { title, details } = data;
  return (
    <div className="App">
      <img className="Logo" src={logo} alt={title} />
      <Header title={title} details={details} />
    </div>
  );
};

export default hot(App);
